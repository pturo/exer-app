import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class ClickService {
  clicks = 0;
  clickSub = new Subject<number>();

  constructor() { }

  addClicks(){
    this.clicks++;
    this.clickSub.next(this.clicks);
  }

  getClicks(): Observable<number>{
    return this.clickSub.asObservable();
  }

}
