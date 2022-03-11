import { NgModule } from "@angular/core";
import { Routes, Router, RouterModule } from "@angular/router";
import { EVTrainComponent } from "./core/components/evtrain/evtrain.component";
import { PokedexDetailComponent } from "./core/components/pokedex/pokedex-detail/pokedex-detail.component";
import { PokedexListComponent } from "./core/components/pokedex/pokedex-list/pokedex-list.component";
import { SettingsComponent } from "./core/components/settings/settings.component";
import { TeamBuilderComponent } from "./core/components/team-builder/team-builder.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes: Routes = [
    {path: "", redirectTo: "/pokemons", pathMatch: "full"},
    {path: "pokemons", component: PokedexListComponent},
    {path: "pokemons/:id", component: PokedexDetailComponent},
    {path: "ev", component: EVTrainComponent},
    {path: "team", component: TeamBuilderComponent},
    {path: "settings", component: SettingsComponent},
    {path: "404", component: NotFoundComponent},
    {path: "**", redirectTo: "/404"}
  ]

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{
    
}