import { Component, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductosService } from '../../services/productos.service';
import { respuesta } from '../../interfaces/categorias';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss'],
})
export class AddProductComponent implements OnInit {

  @ViewChild('formulario', {static: false}) formulario: NgForm;

  name: String;
  description: String;
  price: String;
  enterprise: String;
  category: String;

  constructor(private servicio: ProductosService, private modal: ModalController, private alert: AlertController) { }

  ngOnInit() {}

  close(){
    this.modal.dismiss();
  }

 async agregar(){
    const creado = this.servicio.agregarProductos(this.name, this.description, this.price, this.enterprise, this.category);
    this.paso();
  }
  async error() {
    const alerta = await this.alert.create({
      header: 'Error',
      message: 'No se creo el producto, verifique la información ingresada',
      buttons: ['OK'],
    });
    await alerta.present();
  }

  async paso() {
    const alerta = await this.alert.create({
      header: 'Next ERP',
      message: 'Producto Creado',
      buttons: ['OK'],
    });
    await alerta.present();
  }

}
