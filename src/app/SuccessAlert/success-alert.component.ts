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

  //  serverElements: Array<{ type: string; name: string; content: string }> = [];
  newServername: string;
  newServerContent: string;

  onClickNotify() {
    this.servName = "Hello from child!!!";
    this.exampleOutput.emit(this.servName);
  }

  onClickAddServer() {
    //create an array and push data to it [serverElements].
    // this.serverElements.push({
    //   type: "server",
    //   name: this.newServername,
    //   content: this.newServerContent
    // });
  }
}
