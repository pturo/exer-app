export class Test {
  n1: number = 32;
  n2: number = 12;
  sum: number = this.n1 + this.n2;
  getSum(){
    console.log(this.sum);
  }
}

var e = new Test();
e.getSum(); //prints: 44
