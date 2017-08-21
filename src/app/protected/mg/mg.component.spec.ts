import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MgComponent } from './mg.component';

describe('MgComponent', () => {
  let component: MgComponent;
  let fixture: ComponentFixture<MgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
