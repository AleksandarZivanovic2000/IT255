import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ONamaComponent } from './navigacija/o-nama/o-nama.component';
import { PonudaComponent } from './navigacija/ponuda/ponuda.component';
import { DIComponent } from './di/di.component';
import { KreiranjeRezervacijeComponent } from './kreiranje-rezervacije/kreiranje-rezervacije.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { PocetnaComponent } from './pocetna/pocetna.component';
import { ReduxComponent } from './redux/redux.component';


const routes: Routes = [
  { path: '', redirectTo: 'pocetna', pathMatch: 'full' },
  {path:"pocetna", component:PocetnaComponent},
  {path:"o-nama", component:ONamaComponent},
  {path:"ponuda", component:PonudaComponent},
  {path:"di", component:DIComponent},
  {path:"rezervacija", component:KreiranjeRezervacijeComponent},
  {path:"sobe",component:AddRoomComponent},
  {path:"redux", component:ReduxComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
