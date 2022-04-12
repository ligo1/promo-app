import { Component, OnInit } from '@angular/core';
import { PROMOTIONS } from '../promotions-example';

@Component({
  selector: 'app-lobby',
  templateUrl: './lobby.component.html',
  styleUrls: ['./lobby.component.css']
})
export class LobbyComponent implements OnInit {

  promotions = PROMOTIONS;

  constructor() { }

  ngOnInit() {
  }

}
