import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation
} from "@angular/core";
//import { EventEmitter } from "protractor";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styleUrls: ["./success-alert.component.css"],
  encapsulation: ViewEncapsulation.Emulated //emulated,none,native while none globally,emulated default
})
export class SuccessAlertComponent {
  @Input() color: string[];
  @Input("servElement") element: { name: string; age: number; height: number };

  @Output() exampleOutput = new EventEmitter<string>();

  servName: string;

  @Input() elementone: { type: string; name: string; content: string };

  @Input() getFromParent: string;

  onClickNotify() {
    this.servName = "Hello from child!!!";
    this.exampleOutput.emit(this.servName);
  }
}
