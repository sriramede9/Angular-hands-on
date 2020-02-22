import { Component } from "@angular/core";

@Component({
  selector: "app-server",
  templateUrl: "./server.component.html",
  styles: [
    `
      .online {
        color: white;
      }
    `
  ]
})
export class ServerComponent {
  serverId = 12;
  allowNewServers = false;
  serverName = "";
  serverCreated = "";
  serverCreatedStatus: boolean = false;
  serverStatus: string = Math.random() > 0.5 ? "online" : "offline";

  constructor() {
    setTimeout(() => {
      this.allowNewServers = true;
    }, 2000);
  }
  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    // tslint:disable-next-line: quotemark
    return this.serverStatus === "online" ? "teal" : "tomato";
  }

  onClickCreateServer(): string {
    this.serverCreatedStatus = true;
    this.serverCreated = `The server name  is ${this.serverName}`;
    return this.serverCreated;
  }
}
