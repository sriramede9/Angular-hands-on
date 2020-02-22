import { Component, Input, Output, EventEmitter } from "@angular/core";
//import { EventEmitter } from "protractor";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styleUrls: ["./success-alert.component.css"]
})
export class SuccessAlertComponent {
  @Input() color: string[];
  @Input("servElement") element: { name: string; age: number; height: number };

  @Output() exampleOutput = new EventEmitter<string>();

  servName: string;

  onClickNotify() {
    this.servName = "Hello from child!!!";
    this.exampleOutput.emit(this.servName);
  }
}
