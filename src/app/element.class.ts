import { Directive, ElementRef, Renderer2, effect, inject, input } from "@angular/core";
import { Item } from "./item.interface";

@Directive()
export abstract class AppElement {
  item = input.required<Item>();
  selected = input<boolean>(false);
  private renderer = inject(Renderer2);
  private elementRef = inject(ElementRef);

  constructor() {
    effect(() => {
      for (const key in this.item().style) {
        this.renderer.setStyle(this.elementRef.nativeElement, key, this.item().style[key]);
      }
    });
  }
}
