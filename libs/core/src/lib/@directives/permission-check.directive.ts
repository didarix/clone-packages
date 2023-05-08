import { Directive, ElementRef, Input, OnInit } from '@angular/core';
import { StorageService } from '../@services';

@Directive({
  selector: '[appPermissionCheck]',
})
export class PermissionCheckDirective implements OnInit {
  @Input('appPermissionCheck') permissions: string;

  constructor(
    private eltRef: ElementRef,
    private storage: StorageService
  ) {
  }

  ngOnInit() {
    if (this.permissions === 'fixedBtn') {
      this.applyPermissions(true);
      return;
    }

    this.storage.getItem('permissions').subscribe(data => {

      if (!data) {
        this.applyPermissions(false);
        return;
      }

      const listPermission = data.split(',');
      if (listPermission.includes(this.permissions))
        this.applyPermissions(true);
      else
        this.applyPermissions(false);
    });

  }

  applyPermissions(allow) {
    const el: HTMLElement = this.eltRef.nativeElement;
    if (!allow) el.remove();
  }
}
