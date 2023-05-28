import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinanceadminComponent } from './financeadmin.component';

describe('FinanceadminComponent', () => {
  let component: FinanceadminComponent;
  let fixture: ComponentFixture<FinanceadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FinanceadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FinanceadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
