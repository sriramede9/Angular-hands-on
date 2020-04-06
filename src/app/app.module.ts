import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";

import { ServerComponent } from "./server/server.component";
import { ServersComponent } from "./servers/servers.component";
import { WarningAlertComponent } from "./warning-alert/warning-alert.component";
import { SuccessAlertComponent } from "./SuccessAlert/success-alert.component";
import { FormsModule } from "@angular/forms";
import { ReviseInlineDirectivesComponent } from "./revise-inline-directives/revise-inline-directives.component";
import { BetterHighlightDirective } from "./custom_directives/better-highlight.directive";
import { Test1Directive } from "./custom_directives/test-1.directive";
import { UnlessDirective } from "./revise-inline-directives/unless.directive";
import { Test2Directive } from "./revise-inline-directives/test2.directive";
import { testloggingservices } from "./logging/test_logging_services";

@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    ReviseInlineDirectivesComponent,
    BetterHighlightDirective,
    Test1Directive,
    UnlessDirective,
    Test2Directive,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [testloggingservices],
  bootstrap: [AppComponent],
})
export class AppModule {}
