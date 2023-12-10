import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { KreiranjeRezervacijeComponent } from './kreiranje-rezervacije/kreiranje-rezervacije.component';
import { NavigacijaComponent } from './navigacija/navigacija.component';
import { PrikazRezervacijeComponent } from './prikaz-rezervacije/prikaz-rezervacije.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ONamaComponent } from './navigacija/o-nama/o-nama.component';
import { PonudaComponent } from './navigacija/ponuda/ponuda.component';
import { PreporukaComponent } from './navigacija/preporuka/preporuka.component';
import { NovaSobaComponent } from './funkcionalnost/validacija/validacija.component';
import { DIComponent } from './di/di.component';
import { RoomService } from './services/RoomService';





@NgModule({
  declarations: [
    AppComponent,
    KreiranjeRezervacijeComponent,
    NavigacijaComponent,
    PrikazRezervacijeComponent,
    ONamaComponent,
    PonudaComponent,
    PreporukaComponent,
    NovaSobaComponent,
    DIComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [RoomService],
  bootstrap: [AppComponent]
})
export class AppModule { }
