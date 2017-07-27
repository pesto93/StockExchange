import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailyTradingComponent } from './daily-trading.component';

describe('DailyTradingComponent', () => {
  let component: DailyTradingComponent;
  let fixture: ComponentFixture<DailyTradingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailyTradingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailyTradingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
