import { Component, OnInit } from '@angular/core';
import { RoomService } from '../services/RoomService';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-di',
  templateUrl: './di.component.html',
  styleUrls: ['./di.component.css']
})
export class DIComponent implements OnInit  {
hotelForm!:FormGroup;
totalPrice!:number;
    constructor(private fb: FormBuilder, private roomService: RoomService) {

    }
    ngOnInit() {
      // Inicijalizacija Reactive Forme
      this.hotelForm = this.fb.group({
          numberOfNights: [null, [Validators.required, Validators.min(1)]],
      });
      
  }
  calculateTotalPrice(){
    if (this.hotelForm.valid) {
      const numberOfNights = this.hotelForm.value.numberOfNights;

      // Pozivamo metodu getPrice iz RoomService
      const roomServicePrice = this.roomService.getPrice(numberOfNights);

      // Dodajemo druge elemente cene hotela ako je potrebno
      const additionalHotelCosts = 50;

      // Ukupna cena
      this.totalPrice = roomServicePrice + additionalHotelCosts;
  }
  }
  }


