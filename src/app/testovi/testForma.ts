import { ComponentFixture, TestBed } from '@angular/core/testing';
import { KreiranjeRezervacijeComponent } from '../kreiranje-rezervacije/kreiranje-rezervacije.component';


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

  it('should emit dodajPodatke event when dodajPodatak is called', () => {
   
    spyOn(component.dodajPodatke, 'emit');

   
    component.ime = 'Aca';
    component.prezime = 'Zivac';
    component.brojNocenja = 3;
    component.dodajPodatak();

    
    expect(component.dodajPodatke.emit).toHaveBeenCalledWith({ ime: 'Aca', prezime: 'Zivac', brojNocenja: 3 });
    expect(component.ime).toBe('');
    expect(component.prezime).toBe('');
    expect(component.brojNocenja).toBe(0);
  });
});