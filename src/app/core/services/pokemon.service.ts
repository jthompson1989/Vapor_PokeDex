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

    getRandomDexEntry(pokemon: Pokemon): PokeDex{
        let index = Math.floor(Math.random() * pokemon.description.length);
        if(pokemon.description[index] !== undefined && pokemon.description[index].entry !== ""){
            return pokemon.description[index];
        }
        else{
            return this.getRandomDexEntry(pokemon);
        }
      }
    
      getStatArray(pokemon: Pokemon){
        return [pokemon.hp, 
                pokemon.attack, 
                pokemon.defense, 
                pokemon.speed, 
                pokemon.special_attack, 
                pokemon.special_defense];
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

      getPokemonData(id: string){
        return this.pokemonList.filter(poke => poke.id === id)[0];
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