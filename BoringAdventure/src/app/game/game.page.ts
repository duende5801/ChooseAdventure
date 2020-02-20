import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  gameData: any;

  constructor(private dService: DataService) { }

  ngOnInit() {
    this.dService.storyData.subscribe(data => {
      this.gameData = data;
    });
  }

}
