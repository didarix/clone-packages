import { Injectable } from '@angular/core';
import { MessageService } from 'primeng/api';

export enum EToasterTypes {
  success = 'Success',
  warning = 'Warning',
  error = 'Error',
}

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  constructor(private toaster: MessageService) {}

  /**
   * @description Show toaster with multiple styles
   *
   * @param  {} {message - toaster message
   * @param  {} type - toaster type (success, warning, error)
   * @param  {} duration - the toaster duration
   * @param  {IToasterContent} title - toaster title}
   * @returns void
   */
  show({ message, type, duration, title }: IToasterContent): void {
    type = type ?? EToasterTypes.success;
    duration = duration ?? 5000;

    const types = {
      [EToasterTypes.success]: {
        severity: 'success',
        summary: title ?? EToasterTypes.success,
      },
      [EToasterTypes.error]: {
        severity: 'error',
        summary: title ?? EToasterTypes.error,
      },
      [EToasterTypes.warning]: {
        severity: 'warning',
        summary: title ?? EToasterTypes.warning,
      },
    };

    this.toaster.add({
      detail: message,
      life: duration,
      ...types[type],
    });
  }
}

export interface IToasterContent {
  message: string;
  type?: EToasterTypes;
  duration?: number;
  title?: string;
}
