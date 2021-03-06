import { Directive, HostListener, HostBinding, Input } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
  selector: "[appTest1]"
})
export class Test1Directive implements OnInit {
  @Input() defaultBackgroud: string = "transparent";
  @Input() setBackgroud: string = "orange";

  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.backgroundColor") bgColor: string = "transparent";

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    //this.renderer.setStyle(this.elementRef.nativeElement, "color", "green");
    //this.bgColor="green";
  }

  @HostListener("mouseenter") mouseenter(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "lightgrey"
    // );
    this.bgColor = this.setBackgroud;
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.bgColor = this.defaultBackgroud;
  }
}
