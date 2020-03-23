import {
  Component,
  Input,
  Output,
  EventEmitter,
  ViewEncapsulation,
  OnInit,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked
} from "@angular/core";
//import { EventEmitter } from "protractor";

@Component({
  selector: "app-success-alert",
  templateUrl: "./success-alert.component.html",
  styleUrls: ["./success-alert.component.css"],
  encapsulation: ViewEncapsulation.Emulated //emulated,none,native while none globally,emulated default
})
export class SuccessAlertComponent
  implements OnInit, OnChanges, DoCheck, AfterContentInit,AfterContentChecked {
  @Input() color: string[];
  @Input("servElement") element: { name: string; age: number; height: number };

  @Output() exampleOutput = new EventEmitter<string>();

  servName: string;

  @Input() elementone: { type: string; name: string; content: string };

  @Input() getFromParent: string;

  onClickNotify() {
    this.servName = "Hello from child!!!";
    this.exampleOutput.emit(this.servName);
  }
  constructor() {
    console.log("constructor in success alert");
  }

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("ng on Init working");
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log(
      "this is ngOnChanges called before ngOnInit and constructor all the time!!!"
    );
    console.log(changes);
  }
  ngDoCheck() {
    console.log("ngDoCheck called!!");
  }

  ngAfterContentInit() {
    console.log("ng afterContent init Called");
  }

  ngAfterContentChecked(){
    
  }
}
