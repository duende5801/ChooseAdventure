import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Ending } from '../interfaces/ending';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  displayEnding: Ending;
  constructor(private dService: DataService) { }

  ngOnInit() {
    console.log(this.dService.score);
    if (this.dService.score >= 5) {
      this.displayEnding = this.dService.getEnding(0);
      console.log(this.displayEnding);
    } else if (this.dService.score >= 3) {
      this.displayEnding = this.dService.getEnding(1);
      console.log(this.displayEnding);
    } else if (this.dService.score >= 1) {
      this.displayEnding = this.dService.getEnding(2);
      console.log(this.displayEnding);
    } else if (this.dService.score >= -1) {
      this.displayEnding = this.dService.getEnding(3);
      console.log(this.displayEnding);
    } else if (this.dService.score >= -4) {
      this.displayEnding = this.dService.getEnding(4);
      console.log(this.displayEnding);
    } else if (this.dService.score <= -5) {
      this.displayEnding = this.dService.getEnding(5);
      console.log(this.displayEnding);
    }
  }
}
