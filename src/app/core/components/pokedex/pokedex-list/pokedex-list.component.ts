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
  genFilter: number[]=[];

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
      });
  }

  onGenToggleChange(toggle: any){
    switch(toggle.value){
      case "gen1":
        this.genFilter = [0,150];
        break;
      case "gen2":
        this.genFilter = [151,250];
        break;
      case "gen3":
        this.genFilter = [251,385];
        break;
      case "gen4":
        this.genFilter = [386,492];
        break;
      case "gen5":
        this.genFilter = [493,648];
        break;
      case "gen6":
        this.genFilter = [649,720];
        break;
      case "gen7":
        this.genFilter = [721,808];
        break;
      case "gen8":
        this.genFilter = [809,904];
        break;
      case "all":
        this.genFilter = [];
        break;
    }
    
  }
}

