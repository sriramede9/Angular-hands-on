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

  serverElements: Array<{ type: string; name: string; content: string }> = [
    { type: "server", name: "Kiera", content: "test content of kiara" }
  ];

  // serverElements: [
  //   {
  //     type: "server";
  //     name: "Kiara";
  //     content: "test the content";
  //   }
  // ];

  onClickAddServer(serverData: { serverName: string; serverContent: string }) {
    //create an array and push data to it [serverElements].
    this.serverElements.push({
      type: "server",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }
  onClickAddblueprint(serverData: {
    serverName: string;
    serverContent: string;
  }) {
    //create an array and push data to it [serverElements].
    this.serverElements.push({
      type: "blueprint",
      name: serverData.serverName,
      content: serverData.serverContent
    });
  }

  exampleTestName(fromEvent: string) {
    this.testName = fromEvent;
  }
}
