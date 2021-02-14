import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContainerComponent } from './container.component';

import { HeaderModule } from './header/header.module';
import { BodyModule } from './body/body.module';


@NgModule({
    declarations: [
        ContainerComponent,
    ],
    imports: [
        CommonModule,
        HeaderModule,
        BodyModule,
    ],
    exports: [
        ContainerComponent,
    ]
})
export class ContainerModule { }

