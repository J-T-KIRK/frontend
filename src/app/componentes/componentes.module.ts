import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderBackComponent } from './header-back/header-back.component';
import { IonicModule } from '@ionic/angular';
import { VerProductoComponent } from './ver-producto/ver-producto.component';
import { VerCategoriaComponent } from './ver-categoria/ver-categoria.component';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  entryComponents: [
    VerProductoComponent,
    VerCategoriaComponent
  ],
  declarations: [
    HeaderBackComponent,
    VerProductoComponent,
    VerCategoriaComponent
  ],
  imports: [
    CommonModule,
    IonicModule 
  ],
  exports:[
    HeaderBackComponent,
    VerProductoComponent,
    VerCategoriaComponent
  ]
})
export class ComponentesModule { }
