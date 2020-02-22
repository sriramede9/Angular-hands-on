import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
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
}
