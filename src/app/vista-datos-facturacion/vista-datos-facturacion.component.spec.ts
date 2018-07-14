import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosFacturacionComponent } from './vista-datos-facturacion.component';

describe('VistaDatosFacturacionComponent', () => {
  let component: VistaDatosFacturacionComponent;
  let fixture: ComponentFixture<VistaDatosFacturacionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDatosFacturacionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosFacturacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
