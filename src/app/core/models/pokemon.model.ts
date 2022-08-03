import { CatchLocation } from "./catchlocation.model";
import { EV } from "./ev.model";
import { PokeDex } from "./pokedex.model";

export class Pokemon{
    public name: string = '';
    public id: string = '';
    public imageurl: string = '';
    public description: PokeDex[] = [];
    public height: string = '';
    public category: string = '';
    public weight: string ='';
    public type: string[] = [];
    public weaknesses: string[] = [];
    public evolutions: string[] = [];
    public abilities: string[] = [];
    public hp: number = 0;
    public attack: number = 0;
    public defense: number = 0;
    public special_attack: number = 0;
    public special_defense: number = 0;
    public speed: number = 0;
    public total: number = 0;
    public catch_rate: number = 0;
    public catch_location: CatchLocation[] = [];
    public male_percentage: string = '';
    public female_percentage: string = '';
    public sexless: boolean = false;
    public hatch_time: string = '';
    public egg_groups: string = '';
    public evolvedfrom: string ='';
    public evolution_cause: string = '';
    public base_exp: number = 0;
    public ev: EV[] = [];

    constructor(name:string, id: string){
        this.name = name;
        this.id = id;
    }

    public GetEVStat(stat: string):EV{
        var ev = this.ev.filter(ev => ev.stat === stat)[0];
        if(ev){
            return ev;
        }
        else{
            return new EV(stat, 0);
        }
    }
}