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
          this.pokemons = list as Pokemon[];
      });
  }

  onGenToggleChange(toggle: any){
    switch(toggle.value){
      case "gen1":
        this.genFilter = [1,151];
        break;
      case "gen2":
        this.genFilter = [152,251];
        break;
      case "gen3":
        this.genFilter = [252,386];
        break;
      case "gen4":
        this.genFilter = [387,493];
        break;
      case "gen5":
        this.genFilter = [494,649];
        break;
      case "gen6":
        this.genFilter = [650,721];
        break;
      case "gen7":
        this.genFilter = [722,809];
        break;
      case "gen8":
        this.genFilter = [810,905];
        break;
      case "all":
        this.genFilter = [];
        break;
    }
    
  }
}

