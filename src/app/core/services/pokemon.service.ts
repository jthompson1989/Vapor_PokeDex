import { EventEmitter, Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { PokeDex } from "../models/pokedex.model";
import { Pokemon } from "../models/pokemon.model";
import { initializeApp } from "firebase/app";
import { child, Database, get, getDatabase, ref } from "firebase/database";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

import * as _ from 'lodash';

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
    public pokemonList: Pokemon[] = [];
    private pokemonLoadedEvent = new EventEmitter<Pokemon[]>();
    private returnMsg: String = "";
    private database: Database | undefined;
    constructor(private dbService: NgxIndexedDBService){
        this.dbService.getAll("pokemons").subscribe((pokemons) => {
          if(pokemons.length === 0){
            this.loadPokemonData();
          }
          else{
            this.pokemonList = pokemons as Pokemon[];
          }
        });
    }

    getRandomDexEntry(id: string): PokeDex{
        let pokemon = this.getPokemonData(id);
        let index = Math.floor(Math.random() * pokemon.description.length);
        if(pokemon.description[index] !== undefined && pokemon.description[index].entry !== ""){
            return pokemon.description[index];
        }
        else{
          try{
            return pokemon.description.filter(pokeDex => pokeDex.entry !=="")[0];
          }
          catch(err){
            return pokemon.description[0];
          }
        }
      }

      loadPokemonData(){
        const app = initializeApp(environment.firebaseConfig);

        // Get a reference to the Firebase Database
        this.database = getDatabase(app);
        const dbRef = ref(getDatabase());

        get(child(dbRef, `pokemons`)).then((snapshot) => {
          if (snapshot.exists()) {
              let dataArray = snapshot.val();
              this.pokemonList.push(...dataArray);
              console.log(dataArray);
              this.dbService.bulkAdd("pokemons", dataArray);
          } else {
          console.log("No data available");
           }
          }).catch((error) => {
              console.error(error);
          });
      }
    
      getStatArray(id: string){
        let pokemon = this.getPokemonData(id);
        return [pokemon.hp, 
                pokemon.attack, 
                pokemon.defense, 
                pokemon.speed, 
                pokemon.special_attack, 
                pokemon.special_defense];
      }

      getPokemonList(){
        return this.dbService.getAll('pokemons');
        // this.dbService.getAll('pokemons').subscribe((pokemons) => {
        //   console.log(pokemons);
        //   this.pokemonList = []
        //   for(let x = 0; x < pokemons.length; x++){
        //       this.pokemonList.push(this.convertToPokemon(pokemons[x]));
        //   }
        //   console.log("Pokemon Array:" + this.pokemonList);
        // });
        // return this.pokemonList;
      }

      getPokemonListOrderBy(sortProperty: string){
        return this.dbService.getAll('pokemons').subscribe((pokemons) => {
          this.pokemonList = []
          for(let x = 0; x < pokemons.length; x++){
              this.pokemonList.push(this.convertToPokemon(pokemons[x]));
          }
          return _.sortBy(this.pokemonList, [sortProperty]) as Pokemon[];
        });
      }

      getPokemonData(id: string){
        return this.pokemonList.filter(poke => poke.id === id)[0];
      }

      getPokemonDataObs(id: string) : Observable<Pokemon>{
        return this.dbService.getByID("pokemons", id);
      }

      refreshPokemonData(){
        this.dbService.clear("pokemons").subscribe((isDeleted) =>{
          if(isDeleted){
            this.loadPokemonData();
          }
        })
      }

      clearPokemonData(){
        return this.dbService.clear("pokemons");
      }

      getEvolutionChain(id: string){
        let pokemonEvolutions : Pokemon[] = []
        let pokemon = this.getPokemonData(id);
        if(pokemon.evolutions){
          for(let x = 0; x < pokemon.evolutions.length; x++){
            pokemonEvolutions.push(this.getPokemonData(pokemon.evolutions[x]));
          }
        }
        return pokemonEvolutions;
      }

      setPokemon(pokeID: string){
        return this.dbService.getByKey('pokemons', pokeID);
      }

      convertToPokemon(pokemon: any) : Pokemon{
        let pokemonObject: Pokemon = new Pokemon(pokemon.name, pokemon.id);
        pokemonObject = pokemon as Pokemon;
        return pokemonObject;
    }
      
}