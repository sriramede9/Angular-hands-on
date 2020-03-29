import { Directive, HostListener, HostBinding } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Renderer2 } from "@angular/core";
import { OnInit } from "@angular/core";

@Directive({
  selector: "[appTest1]"
})
export class Test1Directive implements OnInit {
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding("style.backgroundColor") bgColor: string;

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
    this.bgColor = "lightgrey";
  }
  @HostListener("mouseleave") mouseleave(eventData: Event) {
    // this.renderer.setStyle(
    //   this.elementRef.nativeElement,
    //   "background-color",
    //   "transparent"
    // );
    this.bgColor = "transparent";
  }
}
