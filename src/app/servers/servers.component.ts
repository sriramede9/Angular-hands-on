import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styles: [
    `
      .white-class {
        color: white;
      }
    `
  ]
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = "no servers created";
  serverName: string = "testServer";
  servers: string[] = ["a", "b"];
  showParagrah: boolean = true;
  eventlog: object[] = [];

  userName = "";

  constructor() {
    // setTimeout(() => {
    //   this.allowNewServers = true;
    // }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.allowNewServers = true;
    this.serverCreationStatus = "server is created";
    this.servers.push(this.serverName);
  }

  // onUpdateServerName(event: any) {
  //   //console.log(event.target.value);
  //   this.serverName = event.target.value;
  // }
  toggleP() {
    this.showParagrah = !this.showParagrah;
  }

  logEvents(event: any) {
    this.eventlog.push(event.timeStamp);
    // console.log(event.timeStamp);
  }
}
