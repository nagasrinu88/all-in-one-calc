import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-de-limiter',
  templateUrl: './de-limiter.component.html',
  styleUrls: ['./de-limiter.component.scss']
})
export class DeLimiterComponent implements OnInit {

  input: string;
  output: string;

  constructor() { }

  ngOnInit() {
  }

  convert() {
    this.output = this.input.split("\n").join(",");
  }

}
