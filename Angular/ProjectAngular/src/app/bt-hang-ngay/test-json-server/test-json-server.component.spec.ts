import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestJsonServerComponent } from './test-json-server.component';

describe('TestJsonServerComponent', () => {
  let component: TestJsonServerComponent;
  let fixture: ComponentFixture<TestJsonServerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestJsonServerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestJsonServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
