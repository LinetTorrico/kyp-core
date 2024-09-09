import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {KypCoreModule} from '../../projects/kyp-core/src/lib/kyp-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KypCoreModule,
    KypCoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
