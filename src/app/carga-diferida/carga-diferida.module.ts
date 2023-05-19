import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CargaDiferidaComponent } from './carga-diferida.component';
import { ManejoDeRutasComponent } from './manejo-de-rutas/manejo-de-rutas.component';
import { GuardianesDeRutasComponent } from './guardianes-de-rutas/guardianes-de-rutas.component';



@NgModule({
  declarations: [
    CargaDiferidaComponent,
    ManejoDeRutasComponent,
    GuardianesDeRutasComponent
  ],
  imports: [
    CommonModule,
  ]
})
export class CargaDiferidaModule { }
