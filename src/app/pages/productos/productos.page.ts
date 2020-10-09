import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { Product } from 'src/app/interfaces/products';
import { ProductosService } from 'src/app/services/productos.service';
import { VerProductoComponent } from '../../componentes/ver-producto/ver-producto.component';
import { AddProductComponent } from '../../componentes/add-product/add-product.component';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.page.html',
  styleUrls: ['./productos.page.scss'],
})
export class ProductosPage implements OnInit {

  productos: Product[] = [];

  constructor(private servicio: ProductosService, private modal: ModalController) { }

  ngOnInit() {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.servicio.getProductos().subscribe(resp => {
      this.productos.push(...resp.products);
    });
  }


  async verProducto(id) {
    const modal = await this.modal.create({
      component: VerProductoComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

  async add() {
    const modal = await this.modal.create({
      component: AddProductComponent
    });
    return await modal.present();
  }

  doRefresh(event) {
      this.productos = [];
    setTimeout(() => {
      this.obtenerProductos();
      event.target.complete();
    }, 2000);
  }

}
