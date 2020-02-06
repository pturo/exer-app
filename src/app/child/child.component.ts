import { CalcService } from './../service/calc.service';
import { ClickService } from './../service/click.service';
import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  private showClicks = 0;
  private reSum = 0;
  private reSub = 0;
  private reMul = 0;
  private reDiv = 0;

  constructor(private clickService: ClickService, private calcService: CalcService) {
    this.clickService.getClicks().subscribe(clicks => {
      this.showClicks = clicks;
    });
    this.calcService.getSum().subscribe(sum => {
      this.reSum = sum;
    });
    this.calcService.getSub().subscribe(sub => {
      this.reSub = sub;
    });
    this.calcService.getMul().subscribe(mul => {
      this.reMul = mul;
    });
    this.calcService.getDiv().subscribe(div => {
      this.reDiv = div;
    });
   }

  addClicks(){
    this.clickService.addClicks();
  }

  sum(add1: HTMLInputElement, add2: HTMLInputElement){
    const a1 = Number.parseInt(add1.value);
    const a2 = Number.parseInt(add2.value);
    this.calcService.sum(a1, a2);
  }

  sub(sub1: HTMLInputElement, sub2: HTMLInputElement){
    const s1 = Number.parseInt(sub1.value);
    const s2 = Number.parseInt(sub2.value);
    this.calcService.sub(s1, s2);
  }

  mul(mul1: HTMLInputElement, mul2: HTMLInputElement){
    const m1 = Number.parseInt(mul1.value);
    const m2 = Number.parseInt(mul2.value);
    this.calcService.mul(m1, m2);
  }

  div(div1: HTMLInputElement, div2: HTMLInputElement){
    const d1 = Number.parseInt(div1.value);
    const d2 = Number.parseInt(div2.value);
    this.calcService.div(d1, d2);
  }

  ngOnInit() {
  }
}
