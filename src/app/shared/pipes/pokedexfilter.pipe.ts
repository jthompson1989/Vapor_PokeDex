import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../../core/models/pokemon.model';

@Pipe({
    name: 'pokedexfilter',
    pure: false
})
export class PokeDexFilterPipe implements PipeTransform {
    transform(items: Pokemon[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.name.indexOf(filter) !== -1);
    }
}