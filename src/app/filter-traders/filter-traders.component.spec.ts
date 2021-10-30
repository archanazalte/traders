import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterTradersComponent } from './filter-traders.component';

describe('FilterTradersComponent', () => {
  let component: FilterTradersComponent;
  let fixture: ComponentFixture<FilterTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterTradersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
