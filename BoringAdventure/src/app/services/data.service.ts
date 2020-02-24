import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';
import { Ending } from '../interfaces/ending';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://spreadsheets.google.com/feeds/list/1knzjEV5wUyRDTXV3cvVrxjAvbdjxJcQ4zjHItUL0td8/1/public/full?alt=json';
  private url2 = 'https://spreadsheets.google.com/feeds/list/1knzjEV5wUyRDTXV3cvVrxjAvbdjxJcQ4zjHItUL0td8/2/public/full?alt=json';
  private googleSheet;
  private googleSheet2;
  private scenes: Scene[] = [];
  private ending: Ending[] = [];
  private audio = new Audio();
  score = 0;

  constructor(private http: HttpClient) {
    this.getData();
    this.getEndingData();
  }
  getData() {
    this.googleSheet = this.http.get(this.url);
    this.googleSheet.subscribe(
      x => {
        // begin to parse data
        console.log(x);
        for (const s of x.feed.entry) {
          const info: Scene = {
            id: s.gsx$id.$t as number,
            senarios: s.gsx$senarios.$t,
            choice1: s.gsx$choice1.$t,
            choice2: s.gsx$choice2.$t,
            result1: s.gsx$result1.$t,
            result2: s.gsx$result2.$t,
            points1: s.gsx$points1.$t as number,
            points2: s.gsx$points2.$t,
            ending: s.gsx$ending.$t,
            assets: s.gsx$assets.$t
          };
          this.scenes.push(info);
        }
        console.log(this.scenes);
      });
  }
  getEndingData() {
    this.googleSheet2 = this.http.get(this.url2);
    this.googleSheet2.subscribe(
      x => {
        // begin to parse data
        console.log(x);
        for (const s of x.feed.entry) {
          const info: Ending = {
            scenarios: s.gsx$scenarios,
            id: s.gsx$id as number,
          };
          this.ending.push(info);
        }
        console.log(this.ending);
      });
  }
  getScene(num: number) {
    return this.ending.find(element => element.id === num);
  }
  pointSystem(num) {
    console.log('the point is: ' + num);
    this.score = this.score + +num;
    console.log('the score is: ' + this.score);
  }
  getEnding(id: number): Ending {
    return this.ending[id];
  }

  // --------------lecutre -------------//
  getNextScene(id: number): Scene {
    return this.scenes[id];
  }
  getFirstScene(): Scene {
    return this.scenes[0];
  }
  playMusic() {
    this.audio.src = 'assets/music/ill-be-there.mp3';
    this.audio.autoplay = true;
    this.audio.play();
    this.audio.loop = true;
  }
}
