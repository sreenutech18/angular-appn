import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedeemptionwebComponent } from './redeemptionweb.component';

describe('RedeemptionwebComponent', () => {
  let component: RedeemptionwebComponent;
  let fixture: ComponentFixture<RedeemptionwebComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedeemptionwebComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedeemptionwebComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
