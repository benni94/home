import { Component, Input, OnInit } from '@angular/core';
import * as eWelink from 'ewelink-api';

@Component({
  selector: 'app-swifts',
  templateUrl: './swifts.component.html',
  styleUrls: ['./swifts.component.scss']
})
export class SwiftsComponent implements OnInit {

  constructor() {
    this.getDevices();
  }

  @Input() set inputSpeechutter(ut: any) {
    this.getSpeechUtter(ut);
  }

  ngOnInit(): void {
  }

  speechInput: string = "";
  connection: any = [];
  devices: any = [];
  panelOpenState = false;

  newGadgets = [
    { name: 'Wohnzimmer', deviceid: '100119e319' },
    { name: 'Esszimmer', deviceid: '100119e6cf' },
    { name: 'Schlafzimmer', deviceid: '100119dce9' },
    { name: 'Badezimmer', deviceid: '100119e004' },
  ]

  getSpeechUtter($event: string) {
    var tt = $event.split(" ");
    if (tt[0] == 'schalt' || tt[0] == 'schalte') {
      tt.shift();
    };
    tt.forEach(ts => {
      this.speechInput = ts;
      for (var data of this.devices) {
        if (data.name == ts) {
          this.toggle(data.deviceid);
        }
      }
    })
  }

  async getDevices() {

    this.connection = new (eWelink.default as any)({
      email: 'benjamin.fink@gmx.at',
      password: 'Ewelink_test',
      region: "eu"
    });
    this.devices = await this.connection.getDevices();

    for (var gad of this.newGadgets) {
      var device = await this.connection.getDevice(gad.deviceid);
      device.params.switch = device.params.switches[0].switch;
      this.devices.push(device);
    }
  }

  toggle(deviceId: string) {
    this.connection.toggleDevice(deviceId).then((dd: any) => {
      this.getDevices();
    });
  }
}
