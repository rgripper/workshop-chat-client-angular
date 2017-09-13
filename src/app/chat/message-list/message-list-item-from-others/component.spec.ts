import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageListItemFromOthersComponent } from './component';

describe('MessageListItemFromOthersComponent', () => {
  let component: MessageListItemFromOthersComponent;
  let fixture: ComponentFixture<MessageListItemFromOthersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageListItemFromOthersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageListItemFromOthersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
