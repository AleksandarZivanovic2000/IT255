import { Optional } from "@angular/core"

export class Room{
    id!:number
    naziv!:string
    cena!:number

    constructor(@Optional() id:number, naziv:string,  cena:number){
        this.id =id
        this.naziv= naziv
        this.cena = cena
    }
}