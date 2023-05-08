import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {

  searchKeyword: string;

  activeServiceId: string = '';

  constructor() { }
}
