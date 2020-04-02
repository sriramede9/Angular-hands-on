import { Directive, HostListener, HostBinding } from "@angular/core";

@Directive({
  selector: "[appTest2]"
})
export class Test2Directive {
  @HostBinding("style.color") textColor: string = "transparent";
  constructor() {}

  @HostListener("mouseenter") onMouseover() {
    this.textColor = "tomato";
  }
}
