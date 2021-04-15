import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PrintMethodService {

  constructor() { }
  print1(val){
    let el = document.createElement('li');
 
    el.innerText = "Hello "+val;
    document.getElementById('lst').appendChild(el)
  }

  print2(tid,val){
    let el = document.createElement('li');
 
    el.innerText = val;
    document.getElementById(tid).appendChild(el)
  }

}
