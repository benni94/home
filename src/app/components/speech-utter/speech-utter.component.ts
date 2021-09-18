import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { SpeechRecognitionService } from './speech-recognition.service';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}

@Component({
  selector: 'app-speech-utter',
  templateUrl: './speech-utter.component.html',
  styleUrls: ['./speech-utter.component.scss']
})

export class SpeechUtterComponent implements OnInit {

  @Output() out = new EventEmitter<string>();

  eyesOpen: boolean = false;
  showSearchButton: boolean;
  speechData: string;
  bubbleInput: string = "";

  constructor(private speechRecognitionService: SpeechRecognitionService) {
    this.showSearchButton = true;
    this.speechData = "";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    this.speechRecognitionService.DestroySpeechObject();
  }

  listen() {
    this.eyesOpen ? this.eyesOpen = false : this.eyesOpen = true;

    if (this.eyesOpen) {
      this.activateSpeechSearchMovie();
      new Audio("./assets/sounds/in.mp3").play();
    } else {
      this.speechRecognitionService.DestroySpeechObject();
      new Audio("./assets/sounds/out.mp3").play();
    }
  }

  activateSpeechSearchMovie(): void {
    this.showSearchButton = false;

    this.speechRecognitionService.record()
      .subscribe(
        //listener
        (value) => {
          this.showBubble(value);
          this.speechData = value;
          this.out.emit(value);
          console.log(value);
        },
        //errror
        (err) => {
          console.log(err);
          if (err.error == "no-speech") {
            new Audio("./assets/sounds/in.mp3").play();
            console.log("--restatring service--");
            this.activateSpeechSearchMovie();
          }
        },
        //completion
        () => {
          this.showSearchButton = true;
          console.log("--complete--");
          new Audio("./assets/sounds/in.mp3").play();
          this.activateSpeechSearchMovie();
        });
  }

  showBubble($event: string) {
    var tt = $event.split(" ");
    var bubble = "";

    if (tt[0] == 'schalt' || tt[0] == 'schalte') {
      tt.shift();
    };
    console.log(tt);
    
    tt.forEach(ts => {
      bubble = bubble + " " + ts
    })
    this.bubbleInput = "Ich schalte:" + bubble+'.';
    setTimeout(() => {
      this.bubbleInput="";
    },4000);
  }
}
