import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationuserComponent } from './affiliationuser.component';

describe('AffiliationuserComponent', () => {
  let component: AffiliationuserComponent;
  let fixture: ComponentFixture<AffiliationuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliationuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliationuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
