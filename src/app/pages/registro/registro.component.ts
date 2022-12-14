import { Component, OnInit } from '@angular/core';
import { UserI } from 'src/app/models/models';
import { AuthService } from 'src/app/services/auth.service';
import { FirestoreService } from 'src/app/services/firestore.service';
import { InteractionService } from 'src/app/services/interaction.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  datos: UserI = {
    nombre: null,
    apellido: null,
    correo: null,
    uid: null,
    password: null,
    perfil: 'estudiante',
  }

  constructor(
        private auth: AuthService,
        private firestore: FirestoreService,
        private interaction: InteractionService,
        private router: Router
  ) { }

  ngOnInit() {}

  async registrar() {
    this.interaction.presentLoading('Registrando...')
    console.log('datos -> ', this.datos);
    const res = await this.auth.registarUser(this.datos).catch( error => {
      this.interaction.closeLoading();
      this.interaction.presentToast('Error')
      console.log('Error');
    })
    if (res) {
        console.log('Cuenta creada con éxito');
        const path = 'Usuarios';
        const id = res.user.uid;
        this.datos.uid = id;
        this.datos.password = null
        await this.firestore.createDoc(this.datos, path, id)
        this.interaction.closeLoading();
        this.interaction.presentToast('Registrado con exito');
        this.router.navigate(['/home'])
    }

  }

}
