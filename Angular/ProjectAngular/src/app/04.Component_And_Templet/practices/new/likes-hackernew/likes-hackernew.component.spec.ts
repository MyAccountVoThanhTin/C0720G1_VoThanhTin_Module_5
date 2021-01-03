import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LikesHackernewComponent } from './likes-hackernew.component';

describe('LikesHackernewComponent', () => {
  let component: LikesHackernewComponent;
  let fixture: ComponentFixture<LikesHackernewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LikesHackernewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LikesHackernewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
