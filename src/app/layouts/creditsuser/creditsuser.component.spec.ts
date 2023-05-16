import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditsuserComponent } from './creditsuser.component';

describe('CreditsuserComponent', () => {
  let component: CreditsuserComponent;
  let fixture: ComponentFixture<CreditsuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditsuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreditsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
