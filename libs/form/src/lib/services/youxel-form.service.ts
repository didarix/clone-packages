import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YouxelFormService {
  public module: any;

  public SearchUserWithListModule
  constructor(@Inject('config') private config: any) {
    this.module = config.lib.userSearch.SearchUserWithListModule;
    this.SearchUserWithListModule = config.lib.userSearch.SearchUserWithListModule;
    console.log("module from youxel-form.service", this.module)

  }

  public _test() {
    return this.config.lib.userSearch.SearchUserWithListModule;
  }

}


