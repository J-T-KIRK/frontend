import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RootProducto, RootProducto1 } from '../interfaces/products';
import { Categoria } from '../interfaces/categorias';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  nuevoPost = new EventEmitter<Categoria>();

  constructor(private http: HttpClient) { }

  getProductos(){
    return this.http.get<RootProducto>(`${url}/productos/producto`);
  }

  getProducto(id){
    return this.http.get<RootProducto1>(`${url}/productos/${id}`);
  }

  borrarProducto(id){
    return this.http.delete(`${url}/productos/${id}`);
  }

  agregarProductos(name, description, price, enterprise, category){
    return new Promise( resolve => {

      this.http.post(`${url}/productos/producto`, {name, description, price, enterprise, category})
        .subscribe( resp => {
          resolve(true);
        });
    });
  }

}
