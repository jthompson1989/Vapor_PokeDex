import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

@Component({
  selector: 'app-ev-trainer',
  templateUrl: './ev-trainer.component.html',
  styleUrls: ['./ev-trainer.component.css']
})
export class EvTrainerComponent implements OnInit {

  readonly GAMELIST: any[] = [
    {
      Version: "Pokemon Red",
      Region: "Kanto"
    },
    {
      Version: "Pokemon Blue",
      Region: "Kanto"
    },
    {
      Version: "Pokemon Yellow",
      Region: "Kanto"
    },
    {
      Version: "Pokemon Gold",
      Region: "Johto"
    },
    {
      Version: "Pokemon Silver",
      Region: "Johto"
    },
    {
      Version: "Pokemon Crystal",
      Region: "Johto"
    },
    {
      Version: "Pokemon Ruby",
      Region: "Hoenn"
    },
    {
      Version: "Pokemon Sapphire",
      Region: "Hoenn"
    },
    {
      Version: "Pokemon Emerald",
      Region: "Hoenn"
    },{
      Version: "Pokemon Diamond",
      Region: "Sinnoh"
    },
    {
      Version: "Pokemon Pearl",
      Region: "Sinnoh"
    },
    {
      Version: "Pokemon Platinum",
      Region: "Sinnoh"
    },
    {
      Version: "Pokemon Black",
      Region: "Unova"
    },
    {
      Version: "Pokemon White",
      Region: "Unova"
    },
    {
      Version: "Pokemon Black 2",
      Region: "Unova"
    },
    {
      Version: "Pokemon White 2",
      Region: "Unova"
    },
    {
      Version: "Pokemon X",
      Region: "Kalos"
    },
    {
      Version: "Pokemon Y",
      Region: "Kalos"
    },
    {
      Version: "Pokemon Sun",
      Region: "Alola"
    },
    {
      Version: "Pokemon Moon",
      Region: "Alola"
    },
    {
      Version: "Pokemon Ultra Sun",
      Region: "Alola"
    },
    {
      Version: "Pokemon Ultra Moon",
      Region: "Alola"
    }
  ]

  @ViewChild("statList") statList!: ElementRef;
  pokemonList: Pokemon[] = [];
  list: any[] = []; 
  loadingScreen: Boolean = false;

  constructor(private pokemonService: PokemonService) {
   }

  ngOnInit(): void {
  }

  onExecuteClick(){
    this.loadingScreen = true;
    let evStat = this.statList.nativeElement.selectedOptions[0].innerText;
    this.pokemonService.getPokemonList().subscribe((list) => {
      let newList = list as Pokemon[];
      this.pokemonList = newList.filter(
        pokemon => pokemon.ev.filter(
          ev => ev.stat === evStat)[0].ev_value > 0);
      this.list = this.pokemonList.map(p=> ({name: p.name, id: p.id, evs: evStat, ev: p.ev.filter(ev => ev.stat === evStat)[0].ev_value}))
      this.loadingScreen=false;
    })
  }

}
