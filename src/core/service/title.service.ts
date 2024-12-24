import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TitleService {
  currentTitle: Subject<string> = new Subject<string>();
  constructor() { }

  setItem(title: string) {
    this.currentTitle.next(title);
  }
}
