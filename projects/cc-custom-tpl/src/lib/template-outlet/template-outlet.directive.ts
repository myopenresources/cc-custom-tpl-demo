import { Directive, EmbeddedViewRef, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[ccTemplateOutlet]',
  exportAs: 'ccTemplateOutlet'
})
export class TemplateOutletDirective {
  private inputTemplate: TemplateRef<void> | null = null;
  private inputViewRef: EmbeddedViewRef<void> | null = null;

  constructor(private viewContainer: ViewContainerRef) { }

  @Input()
  set ccTemplateOutlet(value: string | TemplateRef<void>) {
    if (value instanceof TemplateRef) {
      this.inputTemplate = value;
    }
    this.updateView();
  }

  updateView(): void {
    if (!this.inputViewRef) {
      this.viewContainer.clear();
      if (this.inputTemplate) {
        this.inputViewRef = this.viewContainer.createEmbeddedView(this.inputTemplate);
      }
    }
  }

}
