import { Component } from '@angular/core';
import * as eWelink from 'ewelink-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'home';

  inputSpeechutter: string="";

  constructor() {

  }

  getSpeechUtter($event: string) {
    this.inputSpeechutter = $event;
  }
}
