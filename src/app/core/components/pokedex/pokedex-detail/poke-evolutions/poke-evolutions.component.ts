import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-poke-evolutions',
  templateUrl: './poke-evolutions.component.html',
  styleUrls: ['./poke-evolutions.component.css']
})
export class PokeEvolutionsComponent implements OnInit {
   @Input() evolutionChain: Pokemon[] = [];
  selectedID: string | undefined;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params) => {
        this.selectedID = params["id"];
      });
  }

}
