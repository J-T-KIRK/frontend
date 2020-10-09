import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { RootCategoria, RootCategorias } from '../interfaces/categorias';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  constructor(private http: HttpClient) { }

  getCategorias(){
      return this.http.get<RootCategorias>(`${url}/productos/producto`);
  }
  getCategoria(id){
    return this.http.get<RootCategoria>(`${url}/productos/${id}`);
  }

  borrarCategoria(id){
    return this.http.delete(`${url}/productos/${id}`);
  }

}
