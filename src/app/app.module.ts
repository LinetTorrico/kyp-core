import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {KypCoreModule} from 'kyp-core';
import {ExceptionService} from 'kyp-common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KypCoreModule,
  ],
  providers: [ExceptionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
