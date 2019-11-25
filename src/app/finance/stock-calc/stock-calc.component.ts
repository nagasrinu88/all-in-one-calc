import { Component, OnInit, OnChanges } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';

@Component({
  selector: 'app-stock-calc',
  templateUrl: './stock-calc.component.html',
  styleUrls: ['./stock-calc.component.scss']
})
export class StockCalcComponent implements OnInit, OnChanges {

  buy = 200;
  qty = 100;
  margins = [];
  net = [];
  buyUpdated = new Subject<number>();
  qtyUpdated = new Subject<number>();

  constructor() {
    this.buyUpdated.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.compute();
      });
    this.qtyUpdated.pipe(
      debounceTime(400),
      distinctUntilChanged())
      .subscribe(value => {
        this.compute();
      });
  }

  ngOnInit() {
    this.compute();
  }

  ngOnChanges(changes) {
    //console.log(changes);
  }

  compute() {
    this.net = [];
    this.margins = [];
    let n = 21;

    for (let i = 1; i <= n; i++) {
      this.margins[i - 1] = (this.buy + (0.05 * i - .35)).toFixed(2);
    }

    for (let i = 1; i <= n; i++) {
      this.net[i - 1] = (this.computeNetValue(this.buy, this.margins[i - 1], this.qty)).toFixed(2);
    }
  }

  private computeNetValue(b: number, s: number, q: number): number {
    let val = 0;
    let turnover = b * q + s * q;
    let brokarage = turnover * 0.0001;
    let stt = s * q * 0.00025;
    let tc = turnover * 0.0000325;
    let gst = (brokarage + tc) * 0.18;
    let sebi = 10 * ((b * q + s * q) / 10000000);
    let stateTax = Math.min(turnover * 0.0001, 100);

    let charges = brokarage + stt + tc + gst + sebi + stateTax;
    //console.log("borkarage", brokarage);
    //console.log("stt", stt);
    //console.log("tc", tc);
    //console.log("gst", gst);
    //console.log("sebi", sebi);
    //console.log("stateTax", stateTax);
    return (s * q - b * q) - charges;
  }

}
