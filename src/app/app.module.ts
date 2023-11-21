import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KreiranjeRezervacijeComponent } from './kreiranje-rezervacije/kreiranje-rezervacije.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PrikazRezervacijeComponent } from './prikaz-rezervacije/prikaz-rezervacije.component';
import { FormsModule } from '@angular/forms';
import { FooterComponent } from './footer/footer.component';


@NgModule({
  declarations: [
    AppComponent,
    KreiranjeRezervacijeComponent,
    NavigacijaComponent,
    PrikazRezervacijeComponent,
    FooterComponent
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
