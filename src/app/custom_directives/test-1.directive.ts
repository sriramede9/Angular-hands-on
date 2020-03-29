import { Directive, HostListener } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
  selector: "[appTest1]"
})
export class Test1Directive implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.

    this.renderer.setStyle(this.elementRef.nativeElement, "color", "green");
  }

  @HostListener("mouseenter") mouseenter(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "lightgrey"
    );
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    this.renderer.setStyle(
      this.elementRef.nativeElement,
      "background-color",
      "transparent"
    );
  }
}
