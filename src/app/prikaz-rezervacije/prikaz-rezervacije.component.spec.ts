import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrikazRezervacijeComponent } from './prikaz-rezervacije.component';

describe('PrikazRezervacijeComponent', () => {
  let component: PrikazRezervacijeComponent;
  let fixture: ComponentFixture<PrikazRezervacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrikazRezervacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PrikazRezervacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
