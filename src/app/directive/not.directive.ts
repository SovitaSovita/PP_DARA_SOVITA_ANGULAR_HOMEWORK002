import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNot]'
})
export class NotDirective {
  private hasView = false;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef) { }

  @Input() set appNot(condition: boolean) {
    if (condition && !this.hasView) { // Display content when condition is true
      this.viewContainer.createEmbeddedView(this.templateRef);
      this.hasView = true;
    } else if (!condition && this.hasView) { // Hide content when condition is false
      this.viewContainer.clear();
      this.hasView = false;
    }
  }
}