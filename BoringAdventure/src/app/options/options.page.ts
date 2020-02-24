import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-options',
  templateUrl: './options.page.html',
  styleUrls: ['./options.page.scss'],
})
export class OptionsPage implements OnInit {
  display = false;
  display2 = false;
  display3 = false;
  private audio = new Audio();

  constructor() { }

  ngOnInit() {
  }
  toggle() {
    this.display = !this.display;
  }
  toggle2() {
    this.display2 = !this.display2;
  }
  toggle3() {
    this.display3 = !this.display3;
  }
  winner() {
      this.audio.src = 'assets/music/Cake-ComfortEagle.mp3';
      this.audio.autoplay = true;
      this.audio.loop = true;
      this.audio.play();
    }
}
