import { Component, OnInit, EventEmitter, Output } from "@angular/core";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"]
})
export class WarningAlertComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  newServername: string;
  newServerContent: string;
  testName: string;

  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() blueprintCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();

  @Output() test = new EventEmitter<{
    name: string;
    age: number;
    height: number;
  }>();

  onClickAddServer() {
    //create an array and push data to it [serverElements].
    this.serverCreated.emit({
      serverName: this.newServername,
      serverContent: this.newServerContent
    });
  }

  onClickAddblueprint() {
    //create an array and push data to it [serverElements].
    this.blueprintCreated.emit({
      serverName: this.newServername,
      serverContent: this.newServerContent
    });
  }
  onClickAddTestName() {
    this.test.emit({ name: this.testName, age: 23, height: 6 });
  }
}
