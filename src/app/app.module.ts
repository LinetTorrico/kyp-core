import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {KypCoreModule} from 'kyp-core';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    KypCoreModule.forRoot(),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
