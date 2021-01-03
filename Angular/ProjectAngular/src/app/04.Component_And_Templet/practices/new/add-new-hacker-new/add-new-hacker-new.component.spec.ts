import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNewHackerNewComponent } from './add-new-hacker-new.component';

describe('AddNewHackerNewComponent', () => {
  let component: AddNewHackerNewComponent;
  let fixture: ComponentFixture<AddNewHackerNewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddNewHackerNewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNewHackerNewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
