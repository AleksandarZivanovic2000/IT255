import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Room } from '../models/Room';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css']
})
export class AddRoomComponent implements OnInit {

  roomForm: FormGroup;

  public rooms: Room[] = []


  constructor(private servis: ApiService) {

    this.servis.getRooms().subscribe((data) => {
      this.rooms = data;
    })
    this.roomForm = new FormGroup({
      nazivSobe: new FormControl('', Validators.required),
      cenaSobe: new FormControl('', Validators.required)
    })
   }


   public addRoom(room: Room){
    this.servis.addRoom(room).subscribe((data)=>{
      this.rooms.unshift(data);
    })
   }


   public submitRoom(){
    let nazivSobe = this.roomForm.get('nazivSobe')?.value;
    let cenaSobe = this.roomForm.get('cenaSobe')?.value;
    let room = new Room(0,nazivSobe, cenaSobe);
    this.addRoom(room);
    if(room){
      alert("Uspesno ste dodali sobu");
    }
   }

   ngOnInit(): void {
    this.loadRooms();
  }

  loadRooms(): void {
    this.servis.getRooms().subscribe(data => {
      this.rooms = data;
    });
  }

  
  public getRoom(id:number){
    this.servis.getRoom(id).subscribe((data)=>{alert(JSON.stringify(data))})
  }

  public deleteRoom(id:number){
    this.servis.deleteRoom(id).subscribe((data)=>{
      this.removeRoomFromList(id);
      alert("Post je obrisan sa servera");
    })
  }

  private removeRoomFromList(id:number){
    let ind = this.rooms.findIndex(room => room.id == id);
    this.rooms.splice(ind,1);
  }



}
