import { Component } from '@angular/core';
import {SessionmanagerService} from 'kyp-core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-main-lib';
  constructor(private sessionManager: SessionmanagerService) {
    console.log('AppComponent has been initialized');
  }
}
