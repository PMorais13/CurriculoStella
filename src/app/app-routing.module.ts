import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcademicoComponent } from './container/body/academico/academico.component';
import { PerfilComponent } from './container/body/perfil/perfil.component';

const routes: Routes = [
  {
    path: "academico",
    component: AcademicoComponent 
  },
  {
    path: "perfil",
    component: PerfilComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
