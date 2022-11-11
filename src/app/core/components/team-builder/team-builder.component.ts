import { Component, Injectable, OnInit, ViewChild } from '@angular/core';
import { FormControl,FormBuilder } from '@angular/forms';
import {Observable} from 'rxjs';
import {startWith, map} from 'rxjs/operators';
import { Pokemon } from '../../models/pokemon.model';
import { PokemonService } from '../../services/pokemon.service';

import * as _ from 'lodash';
import { MatSelect } from '@angular/material/select';
import { PoketeamListComponent } from './poketeam-list/poketeam-list.component';

export const _filter = (opt: string[], value: string): string[] => {
  const filterValue = value.toLowerCase();

  return opt.filter(item => item.toLowerCase().includes(filterValue));
};

@Component({
  selector: 'app-team-builder',
  templateUrl: './team-builder.component.html',
  styleUrls: ['./team-builder.component.css']
})
export class TeamBuilderComponent implements OnInit {
  myControl = new FormControl('');
  pokemons!: Pokemon[];
  selectedPokemons :Pokemon[] = [];

  @ViewChild(MatSelect)
  pokemonSelect!: MatSelect; 

  @ViewChild(PoketeamListComponent) pokeList!: PoketeamListComponent;

  constructor(private _formBuilder: FormBuilder, private pokemonService: PokemonService) { }

  ngOnInit(): void {
      this.pokemonService.getPokemonList().subscribe((list) => {
        this.pokemons = _.sortBy(list, ['name']) as Pokemon[];
    });
  }

  addPokemon(){
      if(this.pokemonSelect && this.pokemonSelect.value){
        if(this.pokeList.pokemonList.length >= 6){
          console.log("Too many Pokemon");
        }
        else{
          this.pokeList.pokemonList.push(this.pokemonSelect.value);
        } 
        
      }
  }

}
