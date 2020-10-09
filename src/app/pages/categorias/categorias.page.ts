import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CategoriesService } from 'src/app/services/categories.service';
import { Category } from '../../interfaces/categorias';
import { VerCategoriaComponent } from '../../componentes/ver-categoria/ver-categoria.component';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.page.html',
  styleUrls: ['./categorias.page.scss'],
})
export class CategoriasPage implements OnInit {

  categorias: Category[] = [];

  constructor(private servicio: CategoriesService, private modal: ModalController) { }

  ngOnInit() {
    this.obtenerCategorias();
  }

  obtenerCategorias(){
    this.servicio.getCategorias().subscribe(res => {
      this.categorias.push(...res.categories);
    });
  }

  async verCategoria(id) {
    const modal = await this.modal.create({
      component: VerCategoriaComponent,
      componentProps: {
        id
      }
    });
    return await modal.present();
  }

  doRefresh(event) {
    this.categorias = [];
  setTimeout(() => {
    this.obtenerCategorias();
    event.target.complete();
  }, 2000);
}



}
