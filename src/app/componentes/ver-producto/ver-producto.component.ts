import { Component, OnInit, Input } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { ProductOne } from 'src/app/interfaces/products';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-ver-producto',
  templateUrl: './ver-producto.component.html',
  styleUrls: ['./ver-producto.component.scss'],
})
export class VerProductoComponent implements OnInit {

  @Input() id;

  producto: ProductOne = {};

  constructor(private servicio: ProductosService, private modal: ModalController, private alert: AlertController) { }

  ngOnInit() {
    this.servicio.getProducto(this.id).subscribe(resp => {
      this.producto = resp.product;
    });
  }

  delete(){
    this.servicio.borrarProducto(this.id).subscribe(resp => console.log('Borrado'))
  }

  close(){
    this.modal.dismiss();
  }

  async borrar() {
    const alert = await this.alert.create({
      header: 'Confirmar',
      message: '¿Borrar este producto?',
      buttons: [
        {
          text: 'Cancelar',
          role: 'cancel',
          cssClass: 'secondary'
        }, {
          text: 'Confirmar',
          handler: () => {
            this.delete();
          }
        }
      ]
    });

    await alert.present();
  }

}
