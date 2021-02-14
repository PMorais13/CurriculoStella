import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BodyComponent } from './body.component';
import { PerfilModule } from './perfil/perfil.module';
import { AcademicoModule } from './academico/academico.module';




@NgModule({
    declarations: [
        BodyComponent,  
    ],
    imports: [
        CommonModule,
        PerfilModule,
        AcademicoModule
    ],
    exports: [
        BodyComponent,
    ]
})
export class BodyModule { }
