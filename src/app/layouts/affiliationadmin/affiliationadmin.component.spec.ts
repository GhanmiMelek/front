import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliationadminComponent } from './affiliationadmin.component';

describe('AffiliationadminComponent', () => {
  let component: AffiliationadminComponent;
  let fixture: ComponentFixture<AffiliationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliationadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AffiliationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
