import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserstablesComponent } from './userstables.component';

describe('UserstablesComponent', () => {
  let component: UserstablesComponent;
  let fixture: ComponentFixture<UserstablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserstablesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserstablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
