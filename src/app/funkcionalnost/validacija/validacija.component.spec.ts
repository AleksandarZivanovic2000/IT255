import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovaSobaComponent } from './validacija.component';

describe('NovaSobaComponent', () => {
  let component: NovaSobaComponent;
  let fixture: ComponentFixture<NovaSobaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovaSobaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovaSobaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
