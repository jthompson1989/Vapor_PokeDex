import { Component, EventEmitter, Injectable, Input, OnInit, Output } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';
import { MatOption } from '@angular/material/core';

@Component({
  selector: 'app-poketeam-list',
  templateUrl: './poketeam-list.component.html',
  styleUrls: ['./poketeam-list.component.css']
})

export class PoketeamListComponent implements OnInit {

  @Input() pokemonList:Pokemon[] = [];
  @Output() PokemonListChange = new EventEmitter<Pokemon[]>();
  constructor() { }

  ngOnInit(): void {
  }

}
