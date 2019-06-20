import { Component, OnInit, Input } from '@angular/core';
import {
  trigger,
  state,
  style,
  animate,
  transition
} from '@angular/animations';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('rotateCup', [
      state('start', style({
        transform: '{{start_pos}}',
        zIndex: '{{z_index}}'
      }), {params: {start_pos: 'scale(1) translate(0px)', z_index: 'auto'}}),
      state('mid', style({
        transform: '{{ mid_pos }}',
        zIndex: '{{z_index}}'
      }),  {params: {mid_pos: 'scale(1.2) translate(0px)', z_index: 'auto'}}),
      state('end', style({
        transform: '{{end_pos}}',
        zIndex: '{{z_index}}'
      }), {params: {end_pos: 'scale(1) translate(260px)', z_index: 'auto'}}),
      transition('* => mid', [animate(1000)]),
      transition('mid => end', [animate(1000)]),
      transition('mid => start', [animate(1000)])
    ])
  ]
})
export class HomeComponent implements OnInit {

  @Input() startPos: string;
  @Input() midPos: string;
  @Input() endPos: string;
  @Input() zindex: string;

  isStart1 = 'start';
  isStart2 = 'start';
  isStart3 = 'start';
  isStart4 = 'start';
  isStart5 = 'start';

  animSpeed = 800;
  intervalSpeed = this.animSpeed + 100;
  nbMaxSwaps = 5;

  posBall;
  animsInterval;
  cupsWidth = 130;
  nbCups = 5;
  nbSwaps = 0;

  constructor() { }

  ngOnInit() {
    this.startPos = 'scale(1) translate(0px)';
    this.midPos = 'scale(1.2) translate(130px)';
    this.endPos = 'scale(1) translate(260px)';
    console.log(document.getElementById('cup2'));
  }

  play() {
    this.isStart1 = 'mid';
    setTimeout(() => {
      this.isStart1 = 'end';
    }, this.animSpeed);
    this.animSpeed -= 20;
  }

  move(isSTart, dir, depth, nbMoves) {
    const distanceAnim = this.cupsWidth * nbMoves / 2;
    const zindex = (depth > 0) ? 5 : -5;
    const scale = (depth > 0) ? 1.25 : .75;
    dir = (dir === 'left') ? '-' : '+';
  }

  getRandId() {
    const arr = [];
    const id = Math.random() * 5;
    const firstCupId = 'cup' + Math.floor(id + 1);
  }

  rotateCup(cup) {

  }

}
