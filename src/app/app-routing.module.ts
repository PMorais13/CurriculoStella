import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AcademicoComponent } from './container/body/academico/academico.component';
import { ContatoComponent } from './container/body/contato/contato.component';
import { CursosComponent } from './container/body/cursos/cursos.component';
import { ExperienciasComponent } from './container/body/experiencias/experiencias.component';
import { PerfilComponent } from './container/body/perfil/perfil.component';

const routes: Routes = [
  // {
  //   path: "**",
  //   component: AcademicoComponent
  // },
  {
    path: "perfil",
    component: PerfilComponent
  },  
  {
    path: "academico",
    component: AcademicoComponent 
  },
  {
    path: "experiencias",
    component: ExperienciasComponent
  },
  {
    path: "cursos",
    component: CursosComponent
  },
  {
    path: "contato",
    component: ContatoComponent
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
