import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChoiceColorComponent } from './choice-color.component';

describe('ChoiceColorComponent', () => {
  let component: ChoiceColorComponent;
  let fixture: ComponentFixture<ChoiceColorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChoiceColorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChoiceColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
