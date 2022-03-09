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

import { initializeApp } from "firebase/app";
import { AngularFireModule } from "@angular/fire/compat";
import { environment } from '../environments/environment';
import { PokeStatsComponent } from './core/components/pokedex/pokedex-detail/poke-stats/poke-stats.component';
import { FormsModule } from '@angular/forms';
import { NgChartsModule } from 'ng2-charts';
import { PokeEvolutionsComponent } from './core/components/pokedex/pokedex-detail/poke-evolutions/poke-evolutions.component';
import { PokedexComponent } from './core/components/pokedex/pokedex.component';
import { IVTrainComponent } from './core/components/ivtrain/ivtrain.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { TeamBuilderComponent } from './core/components/team-builder/team-builder.component';
import { SettingsComponent } from './core/components/settings/settings.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { NGIndexDBModule } from './ng-index.module';


@NgModule({
  declarations: [
    AppComponent,
    PokeDexFilterPipe,
    HeaderComponent,
    PokedexListComponent,
    PokedexDetailComponent,
    PokeStatsComponent,
    PokeEvolutionsComponent,
    PokedexComponent,
    IVTrainComponent,
    NotFoundComponent,
    TeamBuilderComponent,
    SettingsComponent
  ],
  imports: [
    FormsModule,
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    AngularFireModule.initializeApp(environment.firebaseConfig, 'VaporDex'),
    NgChartsModule,
    AppRoutingModule,
    NGIndexDBModule,
    AngularFirestoreModule.enablePersistence()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

}

