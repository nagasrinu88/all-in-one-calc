import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-thambola',
  templateUrl: './thambola.component.html',
  styleUrls: ['./thambola.component.scss']
})
export class ThambolaComponent implements OnInit {

  synthesiser: Window['speechSynthesis'];
  numbers: any[];
  timerId: any;
  num = '-';

  constructor() {
    this.synthesiser = speechSynthesis;
  }

  ngOnInit() {
    // this.start();
  }

  applyRandom(nums: number[]) {
    const max = nums.length;
    let ind;
    for (let i = 0; i < max; i++) {
      ind = Math.floor(max * Math.random());
      const t = nums[i];
      nums[i] = nums[ind];
      nums[ind] = t;
    }
  }

  start() {
    this.numbers = [];
    for (let i = 1; i <= 90; i++) {
      this.numbers.push(i);
    }
    this.applyRandom(this.numbers);
    console.log(this.numbers);

    this.continue();
  }

  continue() {
    const msg = new SpeechSynthesisUtterance();
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      this.num = this.numbers.splice(0, 1)[0];
      console.log(this.num);
      msg.text = '' + this.num;
      this.synthesiser.speak(msg);
      this.applyRandom(this.numbers);
    }, 3000);
  }

  stop() { }



}
