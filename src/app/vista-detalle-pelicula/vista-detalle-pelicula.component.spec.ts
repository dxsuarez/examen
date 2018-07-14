import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDetallePeliculaComponent } from './vista-detalle-pelicula.component';

describe('VistaDetallePeliculaComponent', () => {
  let component: VistaDetallePeliculaComponent;
  let fixture: ComponentFixture<VistaDetallePeliculaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDetallePeliculaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDetallePeliculaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
