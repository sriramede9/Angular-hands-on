import { Component } from "@angular/core";

@Component({
  selector: "server-root",
  templateUrl: "./server.component.html"
})
export class ServerComponent {
  serverId: number = 12;
  serverStatus: string = "offline";
}
