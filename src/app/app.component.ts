import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  podaci: { ime: string, prezime: string, brojNocenja: number }[] = [];

  dodajPodatke(podatak: { ime: string, prezime: string, brojNocenja: number }) {
    this.podaci.push(podatak);
  }
}
