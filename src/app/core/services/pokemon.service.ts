import { Injectable } from "@angular/core";
import { NgxIndexedDBService } from "ngx-indexed-db";
import { PokeDex } from "../models/pokedex.model";
import { Pokemon } from "../models/pokemon.model";
import { initializeApp } from "firebase/app";
import { child, Database, get, getDatabase, ref } from "firebase/database";

import { environment } from "src/environments/environment";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PokemonService{
    public selectedPokemon: Pokemon | undefined;
    public pokemonList: Pokemon[] = [];
    private returnMsg: String = "";
    private database: Database | undefined;
    
    constructor(private dbService: NgxIndexedDBService){

      const app = initializeApp(environment.firebaseConfig);

        // Get a reference to the database service
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

    getRandomDexEntry(): PokeDex{
        let index = Math.floor(Math.random() * this.selectedPokemon!.description.length);
        if(this.selectedPokemon!.description[index] !== undefined && this.selectedPokemon!.description[index].entry !== ""){
            return this.selectedPokemon!.description[index];
        }
        else{
            return this.getRandomDexEntry();
        }
      }
    
      getStatArray(){
        return [this.selectedPokemon!.hp, 
                this.selectedPokemon!.attack, 
                this.selectedPokemon!.defense, 
                this.selectedPokemon!.speed, 
                this.selectedPokemon!.special_attack, 
                this.selectedPokemon!.special_defense];
      }

      getPokemonList(){
        this.dbService.getAll('pokemons').subscribe((pokemons) => {
          console.log(pokemons);
          this.pokemonList = []
          for(let x = 0; x < pokemons.length; x++){
              this.pokemonList.push(this.convertToPokemon(pokemons[x]));
          }
          console.log("Pokemon Array:" + this.pokemonList);
        });
        return this.pokemonList;
      }

      getPokemonData(id: String){
        return this.pokemonList.filter(poke => poke.id === id)[0];
      }

      setPokemon(pokeID: String){
        return this.dbService.getByKey('pokemons', pokeID as string);
      }

      convertToPokemon(pokemon: any) : Pokemon{
        let pokemonObject: Pokemon = new Pokemon(pokemon.name, pokemon.id);
        pokemonObject = pokemon as Pokemon;
        return pokemonObject;
    }
      
}