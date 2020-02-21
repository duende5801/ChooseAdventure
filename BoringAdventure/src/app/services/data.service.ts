import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Scene } from '../interfaces/scene';
import { element } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  private url = 'https://spreadsheets.google.com/feeds/list/1knzjEV5wUyRDTXV3cvVrxjAvbdjxJcQ4zjHItUL0td8/1/public/full?alt=json';
  private googleSheet;
  private scenes: Scene[] = [];
  private audio = new Audio();

  constructor(private http: HttpClient) { 
    this.getData();
  }
  getData() {
    this.googleSheet = this.http.get(this.url);
    this.googleSheet.subscribe(
      x => {
        //begin to parse data
        console.log(x);
        for (let s of x.feed.entry){
          const info: Scene = {
            id: s.gsx$id.$t as number,
            senarios: s.gsx$senarios.$t,
            choice1: s.gsx$choice1.$t,
            choice2: s.gsx$choice2.$t,
            result1: s.gsx$result1.$t,
            result2: s.gsx$result2.$t,
            points1: s.gsx$points1.$t,
            points2: s.gsx$points2.$t,
            ending: s.gsx$ending.$t as boolean
          };
          this.scenes.push(info);
        }
        console.log(this.scenes)
      });
  }
  //----------------was gonna do it this way instead go to lecture notes-------------------//
  getScene(num:number){
    return this.scenes.find(element => element.id === num);
  }

  //_--------------lecutre -------------//
  getNextScene(id: number): Scene{
    return this.scenes[id];
  }
  getFirstScene(): Scene{
    return this.scenes[0];
  }
  playMusic() {
    this.audio.src = ''
    this.audio.play();
  }
}
