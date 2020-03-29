# MyFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.0.1.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Topics Learned so far

****Data Binding***

* **@Input()**
* **@Output()**
* **HTML #refelement to avoid 2way binding , refelement.value**
* **@ViewChild('ref-tag-name'):localVariable:ElementRef --> localVariable.nativeElement.value**

***Style Encapsulation***

* **ViewEncapsulation.[none,native,emulated] --> none will be given styling tags by angular and any style applied in this element will be applied globally,emulated is the default and native use shadow dom technology**

***Projecting content into components with <ng-content></ng-content>***

* **<ng-content><ng-content> will project components html code to the parent,**
* **child.html `<ng-content><ng-content/>` projecting it's code**
* **parent.html `<app-child><h2>Hello this is child html</h2><app-child/>`**
  
***Life Cycle Hooks***
* **OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewContent,OnDestroy**

***On Directives***

* **` [ngClass]="{ even: item == 2 }"
            [ngStyle]="{ 'background-color': item !== 2 ? 'orange' : 'grey' }"
            *ngFor="let item of even"`**
