import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';

import { HeaderModule } from './header/header.module';


@NgModule({
    declarations: [
        ContainerComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
    ],
    exports: [
        ContainerComponent,
    ]
})
export class ContainerModule { }

