import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TradersDetailsComponent } from './traders-details.component';

describe('TradersDetailsComponent', () => {
  let component: TradersDetailsComponent;
  let fixture: ComponentFixture<TradersDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TradersDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TradersDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
