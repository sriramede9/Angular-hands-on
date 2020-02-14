import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-servers",
  templateUrl: "./servers.component.html",
  styleUrls: ["./servers.component.css"]
})
export class ServersComponent implements OnInit {
  allowNewServers = false;
  serverCreationStatus = "no servers created";
  serverName = "testS";

  userName = "";

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onCreateServer() {
    this.serverCreationStatus = "server is created";
  }

  onUpdateServerName(event: any) {
    //console.log(event.target.value);
    this.serverName = event.target.value;
  }
}
