import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VistaActorComponent } from './vista-actor.component';

describe('VistaActorComponent', () => {
  let component: VistaActorComponent;
  let fixture: ComponentFixture<VistaActorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VistaActorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VistaActorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
