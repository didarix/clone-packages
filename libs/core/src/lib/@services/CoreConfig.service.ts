import { Inject, Injectable } from '@angular/core';
import { ICorePackageInterface } from '../interfaces';
@Injectable({
  providedIn: 'root',
})
export class CoreConfigService {
  configuration: ICorePackageInterface;

  constructor(@Inject('config') private config: any) {
    this.configuration = config;
  }
}
