import { Component, OnInit } from '@angular/core';
import {ExceptionService} from 'kyp-common';

@Component({
  selector: 'lib-kyp-core',
  template: `
    <p>
      kyp-core works!
    </p>
  `,
  styles: [
  ]
})
export class KypCoreComponent implements OnInit {

  constructor(private exceptionService: ExceptionService) { }

  ngOnInit(): void {
    console.log('hello world');
  }

}
