import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ActionService {
  private actionSubject = new Subject<void>();

  action$ = this.actionSubject.asObservable();

  constructor() {}

  triggerAction(): void {
    this.actionSubject.next();
  }
}
