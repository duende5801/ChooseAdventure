import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Scene } from '../interfaces/scene';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  displayScene: Scene;
  score = 0;
  show = true;
  ending = false;
  endingPic = true;

  constructor(private dService: DataService, private router: Router) { }

  ngOnInit() {
    // getting first scene
    this.displayScene = this.dService.getFirstScene();
  }
  nextScene(id) {
    if (this.displayScene.ending === 't') {
      // ending stuff here
      this.router.navigate(['/ending']);
    }
    this.displayScene = this.dService.getNextScene(id);
  }
  pointSystem(num) {
    this.dService.pointSystem(num);
  }
}
