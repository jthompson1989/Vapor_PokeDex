import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-poke-catchrate',
  templateUrl: './poke-catchrate.component.html',
  styleUrls: ['./poke-catchrate.component.css']
})
export class PokeCatchrateComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined;
  @ViewChild("pokeBallSelect") pokeBallSelect : ElementRef | undefined;
  catchValue: number = 0;
  ballModifier = 1; //Default Pokeball
  statusModifier = 1;
  maxHP = 100;
  hp = 100;
  constructor() { }

  ngOnInit(): void {
    this.updateCatchValue();
  }

  pokeBallChange(pokeballValue: string){
    debugger;
    if(pokeballValue === "-1"){
      this.catchValue = 255;
    }
    else{
      this.updateCatchValue();
    }
  }

  statusChange(status: string){
    this.updateCatchValue();
  }

  updateCatchValue(){
    this.catchValue = (((3*this.maxHP-2*this.hp) * (this.pokemon!.catch_rate * this.ballModifier) / (3 * this.maxHP)) * this.statusModifier);
  }
}

