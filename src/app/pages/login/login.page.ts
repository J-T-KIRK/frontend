import { Component, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email: string;
  password: string;

  constructor(
    private auth: AuthService, 
    private navCtrl: NavController,
    private alert: AlertController
    ) { }

  ngOnInit() {
  }

  async onLogin(){
    const valido = await this.auth.login(this.email, this.password);
    if (valido){
      this.navCtrl.navigateRoot('main/tabs/tab1', {animated: true});
    }
    else{
      this.presentAlert();
    }
  }

  async presentAlert() {
    const alert = await this.alert.create({
      header: 'Next',
      message: 'Usuario o contraseña incorrectos',
      buttons: ['OK']
    });

    await alert.present();
  }

}
