import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RootUsuario, Usuario } from '../interfaces/usuario';
import { environment } from '../../environments/environment';
import { Storage } from '@ionic/storage';

const url = environment.api;

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  token: string = null;
  private usuario: Usuario = {};

  constructor(private http: HttpClient, private storage: Storage, private navCtrl: NavController) { }

  login(email: string, password: string){

    const data = { email, password};

    return new Promise(resolve => {
      this.http.post(`${url}/usuarios/login`, data)
          .subscribe(resp => {
            
            if(resp['ok']){
              this.guardarToken(resp['token']);
              resolve(true);
            }
            else{
              this.token = null;
              this.storage.clear();
              resolve(false);
            }

          });
    });

    
  }


  async guardarToken( token: string ) {

    this.token = token;
    await this.storage.set('token', token);

    await this.validaToken();


  }

  async cargarToken() {

    this.token = await this.storage.get('token') || null;

  }

  getUsuario() {

    if ( !this.usuario._id ) {
      this.validaToken();
    }

    return { ...this.usuario };

  }


  async validaToken(): Promise<boolean> {

    await this.cargarToken();

    if ( !this.token ) {
      this.navCtrl.navigateRoot('/');
      return Promise.resolve(false);
    }


    return new Promise<boolean>( resolve => {

      const headers = new HttpHeaders({
        'x-token': this.token
      });

      this.http.get<RootUsuario>(`${url}/usuarios/usuario`, { headers })
        .subscribe( resp => {

          if ( resp['ok'] ) {
            this.usuario = resp['usuario'];
            resolve(true);
          } else {
            this.navCtrl.navigateRoot('/login');
            resolve(false);
          }

        });


    });

  }

  logout() {
    this.token   = null;
    this.usuario = null;
    this.storage.clear();
    this.navCtrl.navigateRoot('/', { animated: true });
  }


}


