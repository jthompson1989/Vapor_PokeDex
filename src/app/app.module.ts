import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './core/components/header/header.component';
import { PokedexListComponent } from './core/components/pokedex/pokedex-list/pokedex-list.component';
import { PokedexDetailComponent } from './core/components/pokedex/pokedex-detail/pokedex-detail.component';
import { CommonModule } from '@angular/common';
import { PokeDexFilterPipe } from './shared/pipes/pokedexfilter.pipe';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DBConfig, NgxIndexedDBModule } from 'ngx-indexed-db';

import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDialogModule } from  '@angular/material/dialog';

import { initializeApp } from "firebase/app";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { PokeStatsComponent } from './core/components/pokedex/pokedex-detail/poke-stats/poke-stats.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { PokeEvolutionsComponent } from './core/components/pokedex/pokedex-detail/poke-evolutions/poke-evolutions.component';
import { PokedexComponent } from './core/components/pokedex/pokedex.component';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { TeamBuilderComponent } from './core/components/team-builder/team-builder.component';
import { SettingsComponent } from './core/components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NGIndexDBModule } from './ng-index.module';
import { ServiceWorkerModule } from '@angular/service-worker';
import { PokeCatchrateComponent } from './core/components/pokedex/pokedex-detail/poke-catchrate/poke-catchrate.component';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { PokeDexGenFilterPipe } from './shared/pipes/pokedexgenfilter.pipe';
import { PokeDexTypeFilterPipe } from './shared/pipes/pokedextypefilter.pipe';
import { YouSureDialogComponent } from './shared/dialogs/you-sure-dialog/you-sure-dialog.component';
import { EvTrainerComponent } from './core/components/ev-trainer/ev-trainer.component';
import { BasicDialogComponent } from './shared/dialogs/basic-dialog/basic-dialog.component';



@NgModule({
  declarations: [
    AppComponent,
    PokeDexFilterPipe,
    PokeDexGenFilterPipe,
    PokeDexTypeFilterPipe,
    HeaderComponent,
    PokedexListComponent,
    PokedexDetailComponent,
    PokeStatsComponent,
    PokeEvolutionsComponent,
    PokedexComponent,
    NotFoundComponent,
    TeamBuilderComponent,
    SettingsComponent,
    PokeCatchrateComponent,
    YouSureDialogComponent,
    BasicDialogComponent,
    EvTrainerComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonToggleModule,
    MatDialogModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'VaporDex'),
    NgChartsModule,
    AppRoutingModule,
    NGIndexDBModule,
    AngularFirestoreModule.enablePersistence(),
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: environment.production,
      // Register the ServiceWorker as soon as the app is stable
      // or after 30 seconds (whichever comes first).
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

