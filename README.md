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

\***_Data Binding_**

- **@Input()**
- **@Output()**
- **HTML #refelement to avoid 2way binding , refelement.value**
- **@ViewChild('ref-tag-name'):localVariable:ElementRef --> localVariable.nativeElement.value**

**_Style Encapsulation_**

- **ViewEncapsulation.[none,native,emulated] --> none will be given styling tags by angular and any style applied in this element will be applied globally,emulated is the default and native use shadow dom technology**

**_Projecting content into components with <ng-content></ng-content>_**

- **<ng-content><ng-content> will project components html code to the parent,**
- **child.html `<ng-content><ng-content/>` projecting it's code**
- **parent.html `<app-child><h2>Hello this is child html</h2><app-child/>`**

**_Life Cycle Hooks_**

- **OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewContent,OnDestroy**

**_On Directives_**

- **`[ngClass]="{ even: item == 2 }" [ngStyle]="{ 'background-color': item !== 2 ? 'orange' : 'grey' }" *ngFor="let item of even"`**
- **`ng g d better_highlight`**
- ** `//can use private define variables in constructor in ngOnInit constructor(private eleRef: ElementRef, private renderer: Renderer2) {} //add your own styling and just use selector on tag ngOnInit() { this.renderer.setStyle(this.eleRef.nativeElement, "color", "teal"); }`**
- **@HostListener to capture events and add styling from directives**

- **`@HostListener("mouseleave") mouseleave(eventData: Event) { this.renderer.setStyle( this.elementRef.nativeElement, "background-color", "transparent" );`**

- **@HostBinding**
- **`@HostBinding("style.backgroundColor") bgColor: string; //usage @HostListener("mouseleave") mouseleave(eventData: Event) { this.bgColor = "transparent"; }`**

  - **Create User Defined Structural Directives**

- **`ng g d unless`**
- **`<div *appUnless="onlyOdd"> <li class="list-group-item" [ngClass]="'odd'" [ngStyle]="{ 'font-weight': item == 3 ? 'bolder' : 'lighter' }" *ngFor="let item of odd" > {{ item }} </li> </div>`**
- **`export class UnlessDirective { @Input() set appUnless(condition: boolean) { if (!condition) { this.vcRef.createEmbeddedView(this.templateRef); } else { this.vcRef.clear(); } } constructor( private templateRef: TemplateRef<any>, private vcRef: ViewContainerRef ) {} }`**

- **Create Services**
- _`app-module @Component({ selector: "app-root", templateUrl: "./app.component.html", styleUrls: ["./app.component.css"], providers: [loggingService, dataService] }) //in the components and //in the constructor constructor(private ls: loggingService, private ds: dataService) {} //us ds to push`_
- _in the child of app-component to promote hierarchical-service obj_
- - `constructor(private ls: loggingService) { } //define only in constructor,not in the provider of component section in child onClickAddServer(nameInput, contentInput) { //using ds app-level ds-service-obj here instead of emitting event this.ds.pushToServerElements({ // serverName: this.newServername, serverName: nameInput.value, serverContent: contentInput.value });`

  - **@Injectable() from @angular/core**

  * _If app-module providers array is mentioned with the service we would like to use globally_
  * _i) providers[test_log_services]_
  * _ii) if we are sending any data to service make sure to use @Injectable() on the service class_
  * _iii) we do not need @injectable() it was only a logging service_
  * _iv)we do not have to define again in child components providers array,can define in constructor and use the service_
