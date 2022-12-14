import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { AjustesComponent } from './ajustes/ajustes.component';
import { RegistroComponent } from './pages/registro/registro.component';
import { map } from 'rxjs/operators';
import { AlumnoComponent } from './pages/alumno/alumno.component';
import { DocenteComponent } from './pages/docente/docente.component';
import { PerfilComponent } from './pages/perfil/perfil.component';

const uidAdmin = 'd1PEtAiS9oSEyOdRsKTH7gMxDDH3';
const onlyAdmin = () => map( (user: any) => !!user && (user.uid === uidAdmin) );

const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },

  {path: 'home', component: HomeComponent},
  {path: 'docente', component: DocenteComponent},
  {path: 'alumno', component: AlumnoComponent},
  {path: 'login', component: LoginComponent},
  {path: 'ajustes', component: AjustesComponent},
  {path: 'registro', component: RegistroComponent},
  {path: 'perfil', component: PerfilComponent},
  {path: 'home', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'noticia',
    loadChildren: () => import('./pages/noticia/noticia.module').then( m => m.NoticiaPageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
