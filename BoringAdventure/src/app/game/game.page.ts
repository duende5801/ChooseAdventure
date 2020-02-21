import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Scene } from '../interfaces/scene';

@Component({
  selector: 'app-game',
  templateUrl: './game.page.html',
  styleUrls: ['./game.page.scss'],
})
export class GamePage implements OnInit {
  displayScene: Scene;

  constructor(private dService: DataService) { }

  ngOnInit() {
    //getting first scene
    this.displayScene = this.dService.getFirstScene();
  }
  nextScene(id) {
    console.log(id);
    if(this.displayScene.ending === true){
      //ending stuff
    }
    this.displayScene = this.dService.getNextScene(id);
  }

}
