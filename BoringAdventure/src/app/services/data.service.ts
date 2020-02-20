import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url = 'https://spreadsheets.google.com/feeds/list/1knzjEV5wUyRDTXV3cvVrxjAvbdjxJcQ4zjHItUL0td8/1/public/full?alt=json';
  storyData: any;
  constructor(private http: HttpClient) { }
  getData() {
    return this.http.get<any>(this.url);
  }
  getStoryInfo() {
    this.getData().subscribe(x => {
      this.storyData = x.feed.entry;
      console.log(this.storyData);
    });
  }
}
