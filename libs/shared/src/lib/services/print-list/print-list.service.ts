import { Injectable } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class PrintListService {
  constructor(private router: ActivatedRoute) { }

  print(Url, parms?) {
    const newUrl = Url.toString() + '?printMode=on';
    window.open(newUrl, 'PRINT', 'height=400,width=600');
  }

  printMode() {
    setTimeout(() => {
      window.print();
      window.close();
    }, 3000);
  }

  isPrintMode(): Boolean {
    const params = this.router.snapshot.queryParams;
    console.log(params.printMode === 'on');

    return params.printMode === 'on';
  }
}
