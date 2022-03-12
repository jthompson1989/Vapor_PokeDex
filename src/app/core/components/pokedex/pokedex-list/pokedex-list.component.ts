import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from '../../../models/pokemon.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  pokemons:Pokemon[] = []
  pokeDexSearch: string = "";

  constructor(private router: Router, private pokemonService: PokemonService) {
    
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe((list) => {
        this.pokemons = []
        for(let x = 0; x < list.length; x++){
            this.pokemons.push(this.pokemonService.convertToPokemon(list[x]));
        }
        console.log("Pokemon Array:" + this.pokemons);
      });
  }
}
