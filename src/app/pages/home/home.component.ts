import { Component, OnInit, Input, ViewChild, ElementRef, } from '@angular/core';
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
      state('start1', style({
        transform: '{{start_pos_1}}',
        zIndex: 1
      }), { params: { start_pos_1: 'scale(1) translate(0px)' } }),
      state('start2', style({
        transform: '{{start_pos_2}}',
        zIndex: 0
      }), { params: { start_pos_2: 'scale(1) translate(0px)' } }),
      state('mid1', style({
        transform: '{{ mid_pos_1 }}',
        zIndex: 5
      }), { params: { mid_pos_1: 'scale(1.25) translate(1300px)' } }),
      state('mid2', style({
        transform: '{{ mid_pos_2 }}',
        zIndex: -5
      }), { params: { mid_pos_2: 'scale(0.75) translate(-130px)' } }),
      state('end1', style({
        transform: '{{end_pos_1}}',
        zIndex: 0
      }), { params: { end_pos_1: 'scale(1) translate(260px)' } }),
      state('end2', style({
        transform: '{{end_pos_2}}',
        zIndex: 1
      }), { params: { end_pos_2: 'scale(1) translate(-260px)' } }),
      transition('* => mid1', [animate('{{ anim_speed }}')], { params: { anim_speed: '1000ms' } }),
      transition('* => mid2', [animate('{{ anim_speed }}')], { params: { anim_speed: '1000ms' } }),
      transition('mid1 => *', [animate('{{ anim_speed }}')], { params: { anim_speed: '1000ms' } }),
      transition('mid2 => *', [animate('{{ anim_speed }}')], { params: { anim_speed: '1000ms' } }),
    ])
  ]
})

export class HomeComponent implements OnInit {

  @ViewChild('cup1', { static: true }) cup1: ElementRef;
  @ViewChild('cup2', { static: true }) cup2: ElementRef;
  @ViewChild('cup3', { static: true }) cup3: ElementRef;
  @ViewChild('cup4', { static: true }) cup4: ElementRef;
  @ViewChild('cup5', { static: true }) cup5: ElementRef;
  @Input() startPos1: string;
  @Input() startPos2: string;
  @Input() midPos1: string;
  @Input() midPos2: string;
  @Input() endPos1: string;
  @Input() endPos2: string;
  @Input() animSpeed = '500ms';

  data = 1;
  isStart1 = 'start1';
  isStart2 = 'start1';
  isStart3 = 'start1';
  isStart4 = 'start1';
  isStart5 = 'start1';

  numbers = [1, 2, 3, 4, 5];
  rotateArr = [1, 2, 3, 4, 5];

  startPosCup1 = 0;
  startPosCup2 = 0;
  startPosCup3 = 0;
  startPosCup4 = 0;
  startPosCup5 = 0;
  pos = [];
  imgUrl = '../../../assets/images/Cup-close.png';
  cancelClickCup = false;
  cancelClickPlay = false;
  getNewBallPos = true;
  points = 0;
  gameOver = false;

  constructor() { }

  ngOnInit() {
  }

  openCup(event) {
    if (this.cancelClickCup) {
      this.cancelClickCup = false;
      event.target.setAttribute('style', 'transform: scale(1.3)');
      event.target.setAttribute('src', '../../../assets/images/Cup-open.png');
      setTimeout(() => {
        event.target.setAttribute('style', 'transform: none');
        event.target.setAttribute('src', '../../../assets/images/Cup-close.png');
        this.cancelClickPlay = false;
        if (event.target.closest('.main').children[1] !== undefined) {
          this.points += 10;
          this.getNewBallPos = false;
          this.play();
        } else {
          this.gameOver = true;
          this.animSpeed = '500ms';
          return 0;
        }
      }, 1500);
    }
  }

  play() {
    const rotateCount = 7;
    if (this.gameOver) {
      this.gameOver = false;
      this.points = 0;
    }
    if (!this.cancelClickPlay) {
      this.data = (this.getNewBallPos) ? Math.floor(Math.random() * 4 + 1) : this.data;
      this.showBall(this.data);
      setTimeout(() => {
        this.startGame(rotateCount);
      }, 1500);
    }
    this.cancelClickPlay = true;
  }

  showBall(id) {
    switch (id) {
      case 1: this.cup1.nativeElement.children[0].children[0].setAttribute('style', 'transform: scale(1.3)');
              this.cup1.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-open.png');
              setTimeout(() => {
                this.cup1.nativeElement.children[0].children[0].setAttribute('style', 'transform: none');
                this.cup1.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-close.png');
              }, 1500);
              break;
      case 2: this.cup2.nativeElement.children[0].children[0].setAttribute('style', 'transform: scale(1.3)');
              this.cup2.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-open.png');
              setTimeout(() => {
                this.cup2.nativeElement.children[0].children[0].setAttribute('style', 'transform: none');
                this.cup2.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-close.png');
              }, 1500);
              break;
      case 3: this.cup3.nativeElement.children[0].children[0].setAttribute('style', 'transform: scale(1.3)');
              this.cup3.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-open.png');
              setTimeout(() => {
                this.cup3.nativeElement.children[0].children[0].setAttribute('style', 'transform: none');
                this.cup3.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-close.png');
              }, 1500);
              break;
      case 4: this.cup4.nativeElement.children[0].children[0].setAttribute('style', 'transform: scale(1.3)');
              this.cup4.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-open.png');
              setTimeout(() => {
                this.cup4.nativeElement.children[0].children[0].setAttribute('style', 'transform: none');
                this.cup4.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-close.png');
              }, 1500);
              break;
      case 5: this.cup5.nativeElement.children[0].children[0].setAttribute('style', 'transform: scale(1.3)');
              this.cup5.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-open.png');
              setTimeout(() => {
                this.cup5.nativeElement.children[0].children[0].setAttribute('style', 'transform: none');
                this.cup5.nativeElement.children[0].children[0].setAttribute('src', '../../../assets/images/Cup-close.png');
              }, 1500);
              break;
    }
  }

  startGame(rotateCup) {
    const speed = +this.animSpeed.replace('ms', '');
    const interval = setInterval(() => {
      this.animSpeed = (speed > 50 ) ? speed - 20 + 'ms' : '50ms';
      const isStart = this.getRandId();
      const difference = isStart[1] - isStart[0];
      const pos = difference * 65;
      this.switchStart(this.numbers[isStart[0] - 1], 'mid1', 'end1', 'start1', 2 * pos);
      this.switchStart(this.numbers[isStart[1] - 1], 'mid2', 'end2', 'start1', -2 * pos);
      this.startPos1 = 'scale(1) translate(0px)';
      this.startPos2 = 'scale(1) translate(0px)';
      this.midPos1 = 'scale(1.25) translate(' +  pos + 'px)';
      this.midPos2 = 'scale(.75) translate(' +  -pos + 'px)';
      this.endPos1 = 'scale(1) translate(' +  2 * pos + 'px)';
      this.endPos2 = 'scale(1) translate(' +  -2 * pos + 'px)';
      setTimeout(() => {
        this.changeStart(this.numbers[isStart[0] - 1], this.endPos1);
        this.changeStart(this.numbers[isStart[1] - 1], this.endPos2);
      }, +this.animSpeed.replace('ms', '') * 2);
      this.arrayRotate(this.rotateArr, isStart);
      rotateCup--;
      if (rotateCup === 0) {
        setTimeout(() => {
          this.cancelClickCup = true;
        }, +this.animSpeed.replace('ms', '') + 50);
        clearInterval(interval);
      }
    }, +this.animSpeed.replace('ms', '') * 2);
  }

  changeStart(id, endPos) {
    switch (id) {
      case 1: this.isStart1 = 'start1'; this.cup1.nativeElement.setAttribute('style', endPos); break;
      case 2: this.isStart2 = 'start1'; this.cup2.nativeElement.setAttribute('style', endPos); break;
      case 3: this.isStart3 = 'start1'; this.cup3.nativeElement.setAttribute('style', endPos); break;
      case 4: this.isStart4 = 'start1'; this.cup4.nativeElement.setAttribute('style', endPos); break;
      case 5: this.isStart5 = 'start1'; this.cup5.nativeElement.setAttribute('style', endPos); break;
    }
  }

  switchStart(id, mid, end, start, pos) {
    let isStart;
    switch (id) {
      case 1: this.pos.push(this.startPosCup1);
              this.startPosCup1 += pos;
              isStart = this.isStart1;
              this.isStart1 = mid;
              setTimeout(() => {
                this.isStart1 = (isStart.indexOf('start') !== -1) ? end : start;
              }, +this.animSpeed.replace('ms', ''));
              break;
      case 2: this.pos.push(this.startPosCup2);
              this.startPosCup2 += pos;
              isStart = this.isStart2;
              this.isStart2 = mid;
              setTimeout(() => {
                this.isStart2 = (isStart.indexOf('start') !== -1) ? end : start;
              }, +this.animSpeed.replace('ms', ''));
              break;
      case 3: this.pos.push(this.startPosCup3);
              this.startPosCup3 += pos;
              isStart = this.isStart3;
              this.isStart3 = mid;
              setTimeout(() => {
                this.isStart3 = (isStart.indexOf('start') !== -1) ? end : start;
              }, +this.animSpeed.replace('ms', ''));
              break;
      case 4: this.pos.push(this.startPosCup4);
              this.startPosCup4 += pos;
              isStart = this.isStart4;
              this.isStart4 = mid;
              setTimeout(() => {
                this.isStart4 = (isStart.indexOf('start') !== -1) ? end : start;
              }, +this.animSpeed.replace('ms', ''));
              break;
      case 5: this.pos.push(this.startPosCup5);
              this.startPosCup5 += pos;
              isStart = this.isStart5;
              this.isStart5 = mid;
              setTimeout(() => {
                this.isStart5 = (isStart.indexOf('start') !== -1) ? end : start;
              }, +this.animSpeed.replace('ms', ''));
              break;
    }
  }

  getRandId() {
    const numbers = [...this.numbers];
    const id1 = Math.floor(Math.random() * 4 + 1);
    const cupId = numbers.splice(id1, 1);
    const id2 = Math.floor(Math.random() * 4);
    let firstCupId;
    let secondCupId;
    if (id1 < numbers[id2]) {
      firstCupId = cupId[0];
      secondCupId = numbers[id2];
    } else {
      secondCupId = cupId[0];
      firstCupId = numbers[id2];
    }
    return [firstCupId, secondCupId];
  }

  arrayRotate(arr, isStart) {
    const firstId = arr[isStart[0] - 1];
    const secondId = arr[isStart[1] - 1];
    arr[isStart[0] - 1] = secondId;
    arr[isStart[1] - 1] = firstId;

    if (isStart.includes(this.data)) {
      this.data = (isStart[0] === this.data) ? isStart[1] : isStart[0];
    }
    return arr;
  }
}