import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Ending } from '../interfaces/ending';
import { Scene } from '../interfaces/scene';

@Component({
  selector: 'app-ending',
  templateUrl: './ending.page.html',
  styleUrls: ['./ending.page.scss'],
})
export class EndingPage implements OnInit {
  displayEnding: Scene;
  constructor(private dService: DataService) { }

  ngOnInit() {
  }
}
