import { Component, Input } from "@angular/core";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styleUrls: ["./success-alert.component.css"]
})
export class SuccessAlertComponent {
  @Input() color: string[];
  @Input() element: { name: string; age: number; height: number };
}
