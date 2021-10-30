import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateTradersComponent } from './update-traders.component';

describe('UpdateTradersComponent', () => {
  let component: UpdateTradersComponent;
  let fixture: ComponentFixture<UpdateTradersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateTradersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateTradersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
