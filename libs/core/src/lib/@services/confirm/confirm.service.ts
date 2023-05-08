import { Injectable } from '@angular/core';
import { Confirmation, ConfirmationService } from 'primeng/api';

@Injectable({
  providedIn: 'root',
})
export class ConfirmService {
  constructor(private confirmationService: ConfirmationService) {}

  confirm(config: Confirmation) {
    return this.confirmationService.confirm(config);
  }
}
