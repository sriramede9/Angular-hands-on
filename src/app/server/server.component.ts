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
  serverStatus: string = Math.random() > 0.5 ? "online" : "offline";

  getServerStatus(): string {
    return this.serverStatus;
  }

  getColor(): string {
    // tslint:disable-next-line: quotemark
    return this.serverStatus === "online" ? "teal" : "tomato";
  }
}
