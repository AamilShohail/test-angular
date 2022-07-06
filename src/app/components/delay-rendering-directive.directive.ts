import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNot]',
})
export class DelayRenderingDirectiveDirective {
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  // @Input() set delayRendering(delayTime: number): void { }
  @Input() set appNot(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    } else {
      this.viewContainer.clear();
    }
    console.log(this.viewContainer);
    console.log(this.templateRef);
  }
  ngOnInit() {}
}
