import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KreiranjeRezervacijeComponent } from './kreiranje-rezervacije.component';

describe('KreiranjeRezervacijeComponent', () => {
  let component: KreiranjeRezervacijeComponent;
  let fixture: ComponentFixture<KreiranjeRezervacijeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KreiranjeRezervacijeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KreiranjeRezervacijeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
