import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReviseInlineDirectivesComponent } from './revise-inline-directives.component';

describe('ReviseInlineDirectivesComponent', () => {
  let component: ReviseInlineDirectivesComponent;
  let fixture: ComponentFixture<ReviseInlineDirectivesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReviseInlineDirectivesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReviseInlineDirectivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
