import { Pipe, PipeTransform } from '@angular/core';

import { Pokemon } from '../../core/models/pokemon.model';

@Pipe({
    name: 'pokedextypefilter',
    pure: false
})
export class PokeDexTypeFilterPipe implements PipeTransform {
    transform(items: Pokemon[], filter: string): any {
        if (!items || !filter) {
            return items;
        }
        return items.filter(item => item.type.includes(filter));
    }
}