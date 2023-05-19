import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AspectosGeneralesAngularComponent } from './aspectos-generales-angular/aspectos-generales-angular.component';
import { FormulariosReactivosComponent } from './formularios-reactivos/formularios-reactivos.component';

@NgModule({
  declarations: [
    AppComponent,
    AspectosGeneralesAngularComponent,
    FormulariosReactivosComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
