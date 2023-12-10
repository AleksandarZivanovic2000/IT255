import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nova-soba',
  templateUrl: './validacija.component.html',
  styleUrls: ['./validacija.component.css']
})
export class NovaSobaComponent {
  novaSoba = {
    broj: null,
    tip: '',
    cena: null,
    klima: false,
    miniBar: false,
    sauna: false
  };
  dodajSobu() {
    
    console.log('Dodavanje sobe:', this.novaSoba);
  }
}
