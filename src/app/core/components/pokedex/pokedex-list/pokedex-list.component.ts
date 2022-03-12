import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokemonService } from 'src/app/core/services/pokemon.service';
import { Pokemon } from '../../../models/pokemon.model';
import { filter, Observable } from 'rxjs';

@Component({
  selector: 'app-pokedex-list',
  templateUrl: './pokedex-list.component.html',
  styleUrls: ['./pokedex-list.component.css']
})
export class PokedexListComponent implements OnInit {
  @Output() pokemonSelected = new EventEmitter<Pokemon>();

  pokemons:Pokemon[] = []
  pokeDexSearch: string = "";
  typeFilter: string = "";

  constructor(private router: Router, 
    private pokemonService: PokemonService,
    private route: ActivatedRoute) {
      this.route.params.subscribe(
        (params) => {
          this.typeFilter = params["type"];
        });
      }

  ngOnInit(): void {
      this.pokemonService.getPokemonList().subscribe((list) => {
          this.pokemons = [];
          for(let x = 0; x < list.length; x++){
            this.pokemons.push(this.pokemonService.convertToPokemon(list[x]));
          }
          if(this.typeFilter !== "" && this.typeFilter !== undefined)
          {//TODO: Change this to filter from the indexed instead of selecting all and filtering the array
            this.pokemons = this.pokemons.filter((poke) => {
              return poke.type.includes(this.typeFilter)
            })
          }
      });
  }
}
