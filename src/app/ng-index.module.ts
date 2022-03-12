import { NgModule } from "@angular/core";
import { DBConfig, NgxIndexedDBModule } from "ngx-indexed-db";

export function migrationFactory() {
  return {
    4: (db: any, transaction: { objectStore: (arg0: string) => any; }) => {
      const store = transaction.objectStore('pokemons');
      store.createIndex('type', 'type', { unique: false, multiEntry: true });
    }
  };
}

const dbConfig: DBConfig  = {
    name: 'VaporDexDB',
    version: 4,
    objectStoresMeta: [{
      store: 'pokemons',
      storeConfig: { keyPath: 'id', autoIncrement: true },
      storeSchema: [
      ]
    }], migrationFactory
  };

@NgModule({
    imports: [
        NgxIndexedDBModule.forRoot(dbConfig)
    ],
    exports: [NgxIndexedDBModule]
})

export class NGIndexDBModule{
    
}