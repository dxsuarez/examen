import { Component, OnInit, Input } from '@angular/core';
import { Actor } from '../actor';

@Component({
  selector: 'app-vista-actor',
  templateUrl: './vista-actor.component.html',
  styleUrls: ['./vista-actor.component.css']
})
export class VistaActorComponent implements OnInit {

  @Input() actor: Actor;

  constructor() { }

  ngOnInit() {
  }

}
