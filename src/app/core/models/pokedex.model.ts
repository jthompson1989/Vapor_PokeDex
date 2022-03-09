export class PokeDex{
    public version: string;
    public entry: string;

    constructor(version:string, entry:string){
        this.version = version;
        this.entry = entry;
    }
}