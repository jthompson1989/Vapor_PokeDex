import { NgModule } from "@angular/core";
import { DBConfig, NgxIndexedDBModule } from "ngx-indexed-db";


const dbConfig: DBConfig  = {
    name: 'VaporDexDB',
    version: 4,
    objectStoresMeta: [{
      store: 'pokemons',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
      ]
    }]
  };

@NgModule({
    imports: [
        NgxIndexedDBModule.forRoot(dbConfig)
    ],
    exports: [NgxIndexedDBModule]
})

export class NGIndexDBModule{
    
}