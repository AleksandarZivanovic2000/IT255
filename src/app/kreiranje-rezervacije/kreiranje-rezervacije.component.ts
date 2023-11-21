import { Component, OnInit ,EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-kreiranje-rezervacije',
  templateUrl: './kreiranje-rezervacije.component.html',
  styleUrls: ['./kreiranje-rezervacije.component.css']
})
export class KreiranjeRezervacijeComponent {

  ime!: string;
  prezime!: string;
  brojNocenja!: number;

  @Output() dodajPodatke = new EventEmitter<{ ime: string, prezime: string, brojNocenja: number }>();

  dodajPodatak() {
    this.dodajPodatke.emit({ ime: this.ime, prezime: this.prezime, brojNocenja: this.brojNocenja });
    
    this.ime = '';
    this.prezime = '';
    this.brojNocenja = 0;
}
}
