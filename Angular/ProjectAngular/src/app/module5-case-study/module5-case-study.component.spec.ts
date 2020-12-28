import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Module5CaseStudyComponent } from './module5-case-study.component';

describe('Module5CaseStudyComponent', () => {
  let component: Module5CaseStudyComponent;
  let fixture: ComponentFixture<Module5CaseStudyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Module5CaseStudyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Module5CaseStudyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
