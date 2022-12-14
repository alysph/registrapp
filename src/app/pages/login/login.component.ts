import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { MenuController, LoadingController } from '@ionic/angular';
import { AuthService } from 'src/app/services/auth.service';
import { InteractionService } from 'src/app/services/interaction.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  credenciales = {
    correo: null,
    password: null
  }

  constructor(
    private toastController: ToastController,
    private auth: AuthService,
    private interaction: InteractionService,
    private router: Router,
    private menu: MenuController,
    private loadingController: LoadingController) { }

  ngOnInit() {}


  async presentToast(){
    const toast = await this.toastController.create({
      message: 'Tus cambios han sido guardados',
      duration: 5000
    });
    toast.present();
  }

  async showToast(msg){
    const toast = await this.toastController.create({
      message: msg,
      duration: 7000
    });
    await toast.present();
  }

  async presentToastWithOptions(){
    const toast = await this.toastController.create({
      header: 'Toast header',
      message: 'Click to close',
      position: 'bottom',
      buttons: [
        {
          side: 'start',
          icon: 'star',
          text: 'Favorite',
          handler: () => {
            console.log('Favorite clicked');
          }
        }, {
          text: 'Done',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    await toast.present();
    
    const { role } = await toast.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  async login() {
    await this.interaction.presentLoading('Cargando...')
    console.log('credenciales -> ', this.credenciales);
    const res = await this.auth.login(this.credenciales.correo, this.credenciales.password).catch(error => {
      console.log('Error');
      this.interaction.closeLoading();
      this.interaction.presentToast('Usuario o contraseña incorrectos')
    })
    if (res) {
      console.log('res -> ', res);
      this.interaction.closeLoading();
      this.interaction.presentToast('Iniciado con éxito');
      this.router.navigate(['/home'])
      this.showToast('Bievenido: '+this.credenciales.correo);
    }
  }

  async presentLoading(){
    const loading = await this.loadingController.create({
      cssClass: 'my-custom-class',
      message: 'Ingresando...',
      spinner: 'dots',
    });
    await loading.present();
      setTimeout(() => {
          loading.dismiss();
          this.presentToast();
      }, 5000);
  }

  registrarse(){
    console.log('Función registro');
  }

}
