import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BroadcastService {

  public eventSubject = new BehaviorSubject<any>("");

  constructor() { }

  submitEvent(value) {
    this.eventSubject.next(value);
  }

  getEvent(): Observable<any> {
    return this.eventSubject.asObservable();
  }
}
