export class EV{
    public stat: string = '';
    public ev_value: number = 0; 

    constructor(stat: string, value: number){
        this.stat=stat;
        this.ev_value = value;
    }
}