import { Component, Input, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { CategoriesService } from '../../services/categories.service';
import { Category, Categoria } from '../../interfaces/categorias';

@Component({
  selector: 'app-ver-categoria',
  templateUrl: './ver-categoria.component.html',
  styleUrls: ['./ver-categoria.component.scss'],
})
export class VerCategoriaComponent implements OnInit {

  @Input() id;

  categoria: Categoria = {}

  constructor(private servicio: CategoriesService, private modal: ModalController, private alert: AlertController) { }

  ngOnInit() {
    this.servicio.getCategoria(this.id).subscribe(resp => {
      this.categoria = resp.categoria;
    });
  }

  delete(){
    this.servicio.borrarCategoria(this.id).subscribe(resp => console.log('Borrado'))
  }

  close(){
    this.modal.dismiss();
  }

  async borrar() {
    const alert = await this.alert.create({
      header: 'Confirmar',
      message: '¿Borrar esta categoría?',
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
