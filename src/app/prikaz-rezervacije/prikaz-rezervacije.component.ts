import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-prikaz-rezervacije',
  templateUrl: './prikaz-rezervacije.component.html',
  styleUrls: ['./prikaz-rezervacije.component.css']
})
export class PrikazRezervacijeComponent  {

  @Input() podaci: { ime: string, prezime: string, brojNocenja: number }[] = [];

}
