import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core'


@Directive({
  selector: '[validateActions]',
})
export class ValidateActionDirective {

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef) {}
  @Input() set validateActions({rowData: rowData, actions: actions}) {

    const toggleShow = actions.reduce((acc,crr) => acc || !crr.customPermission || crr.customPermission(rowData), false);
      if(toggleShow){
        let view = this.viewContainer.createEmbeddedView(this.templateRef);
        this.viewContainer.insert(view);
      }
      else this.viewContainer.clear();
    }

}
