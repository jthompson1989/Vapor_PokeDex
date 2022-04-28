import {Component, OnInit, ViewChild} from '@angular/core';
import { PokemonService } from './core/services/pokemon.service';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [PokemonService]
})
export class AppComponent {
  title = 'Vapor_PokeDex';
  
  
  constructor(private pokemonService: PokemonService){
  }
  
}

