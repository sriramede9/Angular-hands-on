import { Component, OnInit } from "@angular/core";
import { logging } from "protractor";
import { loggingService } from "./logging/logging.service";
import { dataService } from "./logging/app_data_service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
  providers: [loggingService, dataService],
})
export class AppComponent implements OnInit {
  name = "Sr!";
  col: string[] = ["a", "b", "c"];

  constructor(private ls: loggingService, private ds: dataService) {}

  serverElements: Array<{ type: string; name: string; content: string }> = [];

  ngOnInit() {
    this.serverElements = this.ds.serverElements;
  }

  testName: string;

  // onClickAddServer(serverData: { serverName: string; serverContent: string }) {
  //   //create an array and push data to it [serverElements].
  //   this.ds.pushToServerElements(serverData);
  //   this.ls.testLog("pushed server to arry");
  // }
  // onClickAddblueprint(serverData: {
  //   serverName: string;
  //   serverContent: string;
  // }) {
  //   this.ds.pushToServerElements(serverData);
  //   this.ls.testLog("pushed blueprint server to arry");
  // }

  // onClickAddTest(testData: { name: string; age: number; height: number }) {
  //   this.testName = testData.name;
  // }
}
