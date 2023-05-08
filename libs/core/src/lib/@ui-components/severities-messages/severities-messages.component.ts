import { Component, Input, OnInit } from '@angular/core';
import { Message, MessageService } from 'primeng/api';
import { PrimeNGConfig } from 'primeng/api';

@Component({
  selector: 'severities-messages',
  template: `<p-messages [(value)]="valueMessages" [enableService]="enableServiceBoolean"></p-messages>`
})
export class SeveritiesMessagesComponent implements OnInit {


  @Input() valueMessages: Message[];
  @Input() enableServiceBoolean: boolean;
  constructor(private messageService: MessageService, private primengConfig: PrimeNGConfig) { }

  ngOnInit() {

  }

}
