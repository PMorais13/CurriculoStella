import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ContainerModule } from './container/container.module';

@NgModule({
  declarations: [
    AppComponent,
   
  ],
  imports: [
    BrowserModule,
    ContainerModule, 
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
