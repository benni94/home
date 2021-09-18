import { Component } from '@angular/core';
import * as eWelink from 'ewelink-api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'home';

  speechInput: string = "";

  constructor() { }

  test() {
    var connection = new (eWelink.default as any)({
      email: 'benjamin.fink@gmx.at',
      password: 'Ewelink_test',
      region: "eu"
    });

    console.log(connection);
    setTimeout(() => {
      const region = connection.getDevices();
      console.log(region);

    }, 1000);

    //connection.login()

    /* get all devices */
    // const devices =  connection.getDevices();
    //console.log(devices);

    /* get specific devide info */
    /* const device = await connection.getDevice('<your device id>');
    console.log(device); */

    /* toggle device */
    /* await connection.toggleDevice('<your device id>'); */

  }
}
