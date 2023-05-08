import { CoreConfigService } from './../CoreConfig.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ServerConfigService {
  packageConfig: any;
  constructor(private http: HttpClient, private coreConfigService: CoreConfigService) {
    this.packageConfig = this.coreConfigService.configuration
  }
  private currentEnvironmentSubject = new BehaviorSubject<any>('');
  currentEnvironment = this.currentEnvironmentSubject.asObservable();
  init(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.http.get(this.packageConfig.envJsonFile).subscribe((data) => {
        // debugger
        this.currentEnvironmentSubject.next(data);
        resolve(true);
      });
    });
  }
}
