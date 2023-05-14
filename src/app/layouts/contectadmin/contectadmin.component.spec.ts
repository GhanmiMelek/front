import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContectadminComponent } from './contectadmin.component';

describe('ContectadminComponent', () => {
  let component: ContectadminComponent;
  let fixture: ComponentFixture<ContectadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContectadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContectadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
