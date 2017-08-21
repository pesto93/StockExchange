import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LiveExchangeComponent } from './live-exchange.component';

describe('LiveExchangeComponent', () => {
  let component: LiveExchangeComponent;
  let fixture: ComponentFixture<LiveExchangeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LiveExchangeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LiveExchangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
