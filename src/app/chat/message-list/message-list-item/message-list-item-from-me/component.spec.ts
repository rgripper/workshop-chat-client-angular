import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListItemFromMeComponent } from './component';

describe('MessageListItemFromMeComponent', () => {
  let component: MessageListItemFromMeComponent;
  let fixture: ComponentFixture<MessageListItemFromMeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListItemFromMeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListItemFromMeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
