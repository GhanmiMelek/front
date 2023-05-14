import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsdesoutienComponent } from './prestationsdesoutien.component';

describe('PrestationsdesoutienComponent', () => {
  let component: PrestationsdesoutienComponent;
  let fixture: ComponentFixture<PrestationsdesoutienComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsdesoutienComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationsdesoutienComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
