import {
  Component,
  OnInit,
  EventEmitter,
  Output,
  ViewEncapsulation
} from "@angular/core";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"],
  encapsulation: ViewEncapsulation.Emulated
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

  onClickAddServer(nameInput, contentInput) {
    //create an array and push data to it [serverElements].
    //console.log(nameInput.value);
    this.serverCreated.emit({
      // serverName: this.newServername,
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onClickAddblueprint(contentInput, nameInput) {
    //create an array and push data to it [serverElements].
    this.blueprintCreated.emit({
      serverName: nameInput.value,
      // serverContent: this.newServerContent
      serverContent: contentInput.value
    });
  }

  onClickAddTest() {
    this.test.emit({ name: this.testName, age: 23, height: 6 });
  }
}
