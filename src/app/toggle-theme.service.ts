import { EventEmitter, Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ToggleThemeService {

  constructor() {
    
  }

  // getTheme : EventEmitter<any> = new EventEmitter;
  getTheme : BehaviorSubject<any> = new BehaviorSubject<any>(false);


  setTheme(bool : boolean) {
    this.getTheme.next(bool);
  }
  
}
