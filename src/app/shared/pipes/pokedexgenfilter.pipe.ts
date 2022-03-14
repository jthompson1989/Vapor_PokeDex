import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../../core/models/pokemon.model';

@Pipe({
    name: 'pokedexgenfilter',
    pure: false
})
export class PokeDexGenFilterPipe implements PipeTransform {
    transform(items: Pokemon[], filter: number[]): any {
        if (!items || !filter || filter.length === 0) {
            return items;
        }
        return items.slice(filter[0], filter[1]);
    }
}