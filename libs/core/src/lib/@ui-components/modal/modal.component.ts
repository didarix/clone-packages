import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() display: boolean;
  @Input() resizable: boolean;
  @Input() header: string;
  @Input() appendTo: string;
  @Input() showFooter: boolean;
  @Input() btnText = {
    apply: 'ACTIONS.APPLY',
    close: 'ACTIONS.CLOSE',
  };
  @Output() modalClosed = new EventEmitter();
  @Output() submitModalData = new EventEmitter();
  @Output() modalOpen = new EventEmitter();

  constructor() {}
  ngOnInit(): void {}

  onOpen() {
    this.modalOpen.emit(this.display);
    console.log(this.display);

    return this.display;
  }

  afterClosedModal() {
    this.modalClosed.emit(this.display);
    console.log(this.display);

    return this.display;
  }

  closeModal() {
    this.display = false;
  }

  confirmModal() {
    this.submitModalData.emit('log data from  modal content');
  }
}
