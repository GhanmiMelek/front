import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PensionsuserComponent } from './pensionsuser.component';

describe('PensionsuserComponent', () => {
  let component: PensionsuserComponent;
  let fixture: ComponentFixture<PensionsuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PensionsuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PensionsuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
