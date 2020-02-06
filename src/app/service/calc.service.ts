import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CalcService {
  private reSum: number = 0;
  private reSub: number = 0;
  private reMul: number = 0;
  private reDiv: number = 0;

  resultSum = new Subject<number>();
  resultSub = new Subject<number>();
  resultMul = new Subject<number>();
  resultDiv = new Subject<number>();

  sum(val1: number, val2: number){
    this.reSum = val1 + val2;
    this.resultSum.next(this.reSum);
  }

  sub(val1: number, val2: number){
    this.reSub = val1 - val2;
    this.resultSub.next(this.reSub);
  }

  mul(val1: number, val2: number){
    this.reMul = val1 * val2;
    this.resultMul.next(this.reMul);
  }

  div(val1: number, val2: number){
    if(val1 == 0 || val2 == 0){
      this.resultSub.error('Nie wolno dzielić przez 0!');
    } else {
      this.reDiv = val1 / val2;
      this.resultDiv.next(this.reDiv);
    }
  }

  getSum(): Observable<number>{
    return this.resultSum.asObservable();
  }

  getSub(): Observable<number>{
    return this.resultSub.asObservable();
  }

  getMul(): Observable<number>{
    return this.resultMul.asObservable();
  }

  getDiv(): Observable<number>{
    return this.resultDiv.asObservable();
  }

  constructor() { }

}
