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
        try{
            return items.filter((item) => {
                let id : number = +item.id;
                if(id >= filter[0] && id <= filter[1]){
                    return item;
                }else{
                    return;
                }
            });
        }
        catch(err){
            console.log("PokeDexGenFilterPipe failed: " + err);
            return items;
        }
    }
}