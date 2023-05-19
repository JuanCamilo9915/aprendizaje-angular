import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientRoutingModule } from './http-client-routing.module';
import { HttpClientEInterceptoresComponent } from './http-client-e-interceptores/http-client-e-interceptores.component';



@NgModule({
  declarations: [
    HttpClientEInterceptoresComponent
  ],
  imports: [
    CommonModule,
    HttpClientRoutingModule
  ]
})
export class HttpClientModule { }
