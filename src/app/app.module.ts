import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KreiranjeRezervacijeComponent } from './kreiranje-rezervacije/kreiranje-rezervacije.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PrikazRezervacijeComponent } from './prikaz-rezervacije/prikaz-rezervacije.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';
import { ONamaComponent } from './navigacija/o-nama/o-nama.component';
import { PonudaComponent } from './navigacija/ponuda/ponuda.component';
import { PreporukaComponent } from './navigacija/preporuka/preporuka.component';


@NgModule({
  declarations: [
    AppComponent,
    KreiranjeRezervacijeComponent,
    NavigacijaComponent,
    PrikazRezervacijeComponent,
    FooterComponent,
    ONamaComponent,
    PonudaComponent,
    PreporukaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
