import { Injectable, NgZone } from '@angular/core';
import * as _ from "lodash";
import { Observable } from 'rxjs';

interface IWindow extends Window {
  webkitSpeechRecognition: any;
  SpeechRecognition: any;
}
@Injectable({
  providedIn: 'root'
})
export class SpeechRecognitionService {

  speechRecognition: any;
  accuracy:number=0.3;

  constructor(
    private zone: NgZone,
  ){}
  

  record(): Observable<string> {
    
    return Observable.create((observer: any) => {
      const { webkitSpeechRecognition }: IWindow = <any>window;
      this.speechRecognition = new webkitSpeechRecognition();
      //this.speechRecognition = SpeechRecognition;
      this.speechRecognition.continuous = true;
      //this.speechRecognition.interimResults = true;
      this.speechRecognition.lang = 'de';
      this.speechRecognition.maxAlternatives = 1;

      this.speechRecognition.onresult = (speech: any) => {
        let term: string = "";
        if (speech.results) {
          var result = speech.results[speech.resultIndex];
          var transcript = result[0].transcript;
          if (result.isFinal) {
            if (result[0].confidence < this.accuracy) {
             console.log("i can't understand you");
            }
            else {
              term = _.trim(transcript);
              new Audio("./assets/sounds/done.mp3").play();
             // console.log("Did you said? -> " + term + " , If not then say something else...");
            }
          }
        }
        this.zone.run(() => {
          observer.next(term);
        });
      };

      this.speechRecognition.onerror = (error: any) => {
        observer.error(error);
      };

      this.speechRecognition.onend = () => {
        observer.complete();
      };

      this.speechRecognition.start();
      console.log("Say something - We are listening !!!");
    });
  }

  DestroySpeechObject() {
    if (this.speechRecognition) {
      this.speechRecognition.abort();
    }
  }

}