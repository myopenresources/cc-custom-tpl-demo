import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CustomTemplateModule } from 'cc-custom-tpl';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    CustomTemplateModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
