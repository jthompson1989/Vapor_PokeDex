import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PokeDex } from 'src/app/core/models/pokedex.model';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})
export class PokedexDetailComponent implements OnInit {
  pokemon: Pokemon | undefined;

  selectedPokedex:PokeDex | undefined;
  selectedID: string | undefined;
  statsArray: number[] = [];

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService,
    private router: Router) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.selectedID = params["id"];
        this.pokemonService.setPokemon(this.selectedID!).subscribe((pokemon) => {
          this.pokemon = pokemon as Pokemon;
          this.selectedPokedex = this.pokemonService.getRandomDexEntry(this.selectedID!);
          this.statsArray = this.pokemonService.getStatArray(this.selectedID!);
      });}
    );
    
  }

  pokeDexVersionChange(event: Event):void{
    let index = (event.target as HTMLSelectElement).selectedIndex;
    this.selectedPokedex = this.pokemon!.description[index];
  }

  getEvolutionChain(){
    return this.pokemonService.getEvolutionChain(this.selectedID!);
  }
}
