import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Sr!";
  col: string[] = ["a", "b", "c"];
  ele: {} = { name: "jaffa", age: 23, height: 23 };
}
