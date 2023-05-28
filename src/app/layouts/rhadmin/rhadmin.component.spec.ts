import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RHadminComponent } from './rhadmin.component';

describe('RHadminComponent', () => {
  let component: RHadminComponent;
  let fixture: ComponentFixture<RHadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RHadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RHadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
