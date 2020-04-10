import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-thambola',
  templateUrl: './thambola.component.html',
  styleUrls: ['./thambola.component.scss']
})
export class ThambolaComponent implements OnInit {

  synthesiser: Window['speechSynthesis'];
  numbers: any[];
  picked: any[];
  numMap = {};
  timerId: any;
  num = '-';
  delay = 5000;

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
    this.picked = [];
    this.numMap = {};
    for (let i = 1; i <= 90; i++) {
      this.numbers.push({ val: i, active: false });
    }
    this.applyRandom(this.numbers);
    console.log(this.numbers);

    this.continue();
  }

  continue() {
    const msg = new SpeechSynthesisUtterance();
    clearInterval(this.timerId);
    this.timerId = setInterval(() => {
      const pick = this.numbers.splice(0, 1)[0];
      this.picked.push(pick);
      this.num = pick.val;
      this.numMap[pick.val] = true;
      console.log(this.num);
      msg.text = '' + pick.val;
      this.synthesiser.speak(msg);
      this.applyRandom(this.numbers);

    }, this.delay);
  }

  stop() { }

  hasNumber(n) {
    return true;
  }


}
