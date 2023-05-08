import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { IEmptyDataOptions } from './interfaces/empty_data_interface';
@Component({
  selector: 'app-empty-data',
  templateUrl: './empty-data.component.html',
  styleUrls: ['./empty-data.component.scss'],
})
export class EmptyDataComponent implements OnInit {
  @Input() options: IEmptyDataOptions;

  constructor(private router: Router, private route: ActivatedRoute) {}
  ngOnInit(): void {}

  redirectAction() {
    const hasAction = this.options.redirectAction;
    if (hasAction) return this.options.redirectAction();
    this.router.navigate(['add'], { relativeTo: this.route.parent });
  }
}
