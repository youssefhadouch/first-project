import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';
import { Product } from '../models/product.module';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit{

  @Input('appHighlight') product: Product | undefined;

  constructor(private el: ElementRef, private renderer: Renderer2) { }

  ngOnInit() {
    if (this.product) {
      const backgroundColor = this.product.stock ? 'lightgreen' : 'lightcoral';
      this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', backgroundColor);
    }
  }

}
