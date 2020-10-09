import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Usuario } from '../../interfaces/usuario';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page implements OnInit {

  usuario: Usuario = {};

  constructor(private auth: AuthService) {}

  ngOnInit(){
    this.usuario =  this.auth.getUsuario();
   }
 
   logOut(){
     this.auth.logout();
   }

}
