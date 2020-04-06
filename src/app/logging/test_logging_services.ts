import { Injectable } from "@angular/core";

@Injectable()
export class testloggingservices {
  names: string[] = ["Sri!"];
  pushthis(msg: string) {
    this.names.push(msg);
  }
}
