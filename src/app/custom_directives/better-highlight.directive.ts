import { Directive, Renderer2, OnInit, ElementRef } from "@angular/core";

@Directive({
  selector: "[appBetterHighlight]"
})
export class BetterHighlightDirective implements OnInit {
  constructor(private eleRef: ElementRef, private renderer: Renderer2) {}
  //add your own styling and just use selector on tag
  ngOnInit() {
    this.renderer.setStyle(this.eleRef.nativeElement, "color", "teal");
  }
}
