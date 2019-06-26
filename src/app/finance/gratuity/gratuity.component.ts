import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gratuity',
  templateUrl: './gratuity.component.html',
  styleUrls: ['./gratuity.component.scss']
})
export class GratuityComponent implements OnInit {

  basic = 25000;
  years = 5;
  amount: number;

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    this.amount = Math.round(this.basic * this.years * (15 / 26));
  }

}
