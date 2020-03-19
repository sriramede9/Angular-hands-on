import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  name = "Sr!";
  col: string[] = ["a", "b", "c"];

  ele: { type: string; name: string; content: string } = {
    type: "server",
    name: "Jaffar",
    content: "is the content to test"
  };

  testName: string;

  //serverElements: Array<{ type: string; name: string; content: string }> = [];

  serverElements: [
    {
      type: "server";
      name: "Kiara";
      content: "test the content";
    }
  ];

  exampleTestName(fromEvent: string) {
    this.testName = fromEvent;
  }
}
