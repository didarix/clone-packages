import { Component, Input, OnInit } from '@angular/core';
import { FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'app-debug-formly',
  template: `
    <div class="debug-box">
      <p-accordion>
        <p-accordionTab header="Developer Debug">
          <p-tabView>
            <p-tabPanel header="Fields">
              <pre>
                      {{ fields | json }}
                    </pre
              >
            </p-tabPanel>
            <p-tabPanel header="Model">
              <pre>
                      {{ model | json }}
                    </pre
              >
            </p-tabPanel>
          </p-tabView>
        </p-accordionTab>
      </p-accordion>
    </div>
  `,
})
export class DebugFormlyComponent implements OnInit {
  @Input() fields: FormlyFieldConfig[] = [];
  @Input() model: { [key: string]: any } = {};

  constructor() {}

  ngOnInit(): void {}
}
