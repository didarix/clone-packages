import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';
@Component({
  selector: 'inline-messages',
  template: `<p-message [severity]="severity" [text]="message" styleClass="p-mr-2"></p-message>`
})
export class InlineMessagesComponent implements OnInit {
  @Input() severity: string;
  @Input() message: string;

  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }


  ngOnInit() {
  }

}
