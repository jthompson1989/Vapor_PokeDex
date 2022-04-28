import { Component, OnInit } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css']
})
export class PokedexComponent implements OnInit {
  selectedPokemon: Pokemon | undefined;
  constructor(private pokemonService: PokemonService) { 
    
  }

  ngOnInit(): void {
    
  }

  pokemonSelected(pokemon: Pokemon){
    this.selectedPokemon = pokemon;
  }

  backButtonClicked(){
    this.selectedPokemon = undefined;
  }

}
