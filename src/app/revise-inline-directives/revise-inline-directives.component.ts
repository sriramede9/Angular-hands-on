import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-revise-inline-directives",
  templateUrl: "./revise-inline-directives.component.html",
  styleUrls: ["./revise-inline-directives.component.css"]
})
export class ReviseInlineDirectivesComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  // numbers: number[] = [1, 2, 3, 4, 5, 6];

  onlyOdd: boolean = false;

  even: number[] = [2, 4, 6];
  odd: number[] = [1, 3, 5];
}
