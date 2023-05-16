import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrestationsdesoutienuserComponent } from './prestationsdesoutienuser.component';

describe('PrestationsdesoutienuserComponent', () => {
  let component: PrestationsdesoutienuserComponent;
  let fixture: ComponentFixture<PrestationsdesoutienuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrestationsdesoutienuserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrestationsdesoutienuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
