import { Component } from '@angular/core';
import { ITEMS } from './items';

@Component({
  selector: 'app-exercices',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent {
  items = ITEMS;
}
