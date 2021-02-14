import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AcademicoComponent } from './academico.component';


@NgModule({
    declarations: [
        AcademicoComponent,  
    ],
    imports: [
        CommonModule,
    ],
    exports: [
        AcademicoComponent,
    ]
})
export class AcademicoModule { }
