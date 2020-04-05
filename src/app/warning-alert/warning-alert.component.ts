import {
  Component,
  OnInit,
  EventEmitter,
  ViewEncapsulation,
  ViewChild,
  ElementRef
} from "@angular/core";

import { dataService } from "./../logging/app_data_service";

@Component({
  selector: "app-warning-alert",
  templateUrl: "./warning-alert.component.html",
  styleUrls: ["./warning-alert.component.css"],
  encapsulation: ViewEncapsulation.Emulated //none,native,
  // providers:[loggingService]
})
export class WarningAlertComponent implements OnInit {
  constructor(private ds: dataService) {}

  ngOnInit(): void {}

  newServername: string;
  newServerContent: string;
  testName: string;

  // @ViewChild("testInput") testDataInput: ElementRef;

  // @Output() serverCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>();

  // @Output() blueprintCreated = new EventEmitter<{
  //   serverName: string;
  //   serverContent: string;
  // }>();

  // @Output() test = new EventEmitter<{
  //   name: string;
  //   age: number;
  //   height: number;
  // }>();

  onClickAddServer(nameInput, contentInput) {
    //create an array and push data to it [serverElements].
    //console.log(nameInput.value);
    // this.serverCreated.emit({
    //   // serverName: this.newServername,
    //   serverName: nameInput.value,
    //   serverContent: contentInput.value
    // });
    this.ds.pushToServerElements({
      // serverName: this.newServername,
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  onClickAddblueprint(contentInput, nameInput) {
    //create an array and push data to it [serverElements].
    // this.blueprintCreated.emit({
    //   serverName: nameInput.value,
    //   // serverContent: this.newServerContent
    //   serverContent: contentInput.value
    // });
    this.ds.pushToServerElements({
      // serverName: this.newServername,
      serverName: nameInput.value,
      serverContent: contentInput.value
    });
  }

  // onClickAddTest() {
  //   // this.test.emit({ name: this.testName, age: 23, height: 6 });
  //   console.log(this.testDataInput.nativeElement.value);
  // }
}
