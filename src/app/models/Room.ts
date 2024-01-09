import { Optional } from "@angular/core"

export class Room{
    id!:number
    nazivSobe!:string
    cenaSobe!:number

    constructor(@Optional() id:number, nazivSobe:string,  cenaSobe:number){
        this.id =id
        this.nazivSobe= nazivSobe
        this.cenaSobe = cenaSobe
    }
}