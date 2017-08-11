import { Component } from '@angular/core';

/**
 * Generated class for the DummyComponent component.
 *
 * See https://angular.io/docs/ts/latest/api/core/index/ComponentMetadata-class.html
 * for more info on Angular Components.
 */
@Component({
  selector: 'dummy',
  templateUrl: 'dummy.html'
})
export class DummyComponent {

  text: string;

  constructor() {
    console.log('Hello DummyComponent Component');
    this.text = 'Hello World';
  }

}
