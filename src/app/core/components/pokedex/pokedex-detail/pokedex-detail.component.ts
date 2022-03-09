import { Component, Input, OnInit, Inject, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PokeDex } from 'src/app/core/models/pokedex.model';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { PokemonService } from 'src/app/core/services/pokemon.service';

@Component({
  selector: 'app-pokedex-detail',
  templateUrl: './pokedex-detail.component.html',
  styleUrls: ['./pokedex-detail.component.css']
})
export class PokedexDetailComponent implements OnInit {
  @Output() backButtonClick = new EventEmitter<void>();
  pokemon: Pokemon | undefined;
  @Input('PokeID') pokemonID: string = "";

  selectedPokedex:PokeDex | undefined;
  selectedID: String | undefined;

  constructor(private route: ActivatedRoute,
    private pokemonService: PokemonService) { 
  }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {this.selectedID = params["id"]}
    );
    //this.pokemon = this.pokemonService.getPokemonData(this.selectedID!);
    this.pokemonService.setPokemon(this.selectedID!).subscribe((pokemon) => {
      console.log(pokemon);
      this.pokemon = pokemon as Pokemon;
      this.pokemonService.selectedPokemon = this.pokemon;
    });;
    //this.pokemon = this.pokemonService.selectedPokemon!;
    this.selectedPokedex = this.pokemonService.getRandomDexEntry();
  }

  backButtonClicked(){
    this.backButtonClick.emit();
  }

  pokeDexVersionChange(event: Event):void{
    let index = (event.target as HTMLSelectElement).selectedIndex;
    this.selectedPokedex = this.pokemon!.description[index];
  }

  getStatArray(){
    return this.pokemonService.getStatArray();
  }
}
