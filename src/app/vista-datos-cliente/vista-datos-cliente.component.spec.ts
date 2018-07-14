import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaDatosClienteComponent } from './vista-datos-cliente.component';

describe('VistaDatosClienteComponent', () => {
  let component: VistaDatosClienteComponent;
  let fixture: ComponentFixture<VistaDatosClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaDatosClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaDatosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
