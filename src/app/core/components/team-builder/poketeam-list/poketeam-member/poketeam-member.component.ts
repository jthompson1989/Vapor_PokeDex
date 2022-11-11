import { Component, Input, OnInit } from '@angular/core';
import { Pokemon } from 'src/app/core/models/pokemon.model';

@Component({
  selector: 'app-poketeam-member',
  templateUrl: './poketeam-member.component.html',
  styleUrls: ['./poketeam-member.component.css']
})
export class PoketeamMemberComponent implements OnInit {
  @Input() pokemon: Pokemon | undefined
  constructor() { }

  ngOnInit(): void {
  }

}
