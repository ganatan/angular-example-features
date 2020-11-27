import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  link = 'testing';
  data = [
    {
      caption: 'Testing',
      icon: 'fas fa-chalkboard-teacher',
      items: [
        { name: 'ngmodel', link: 'ngmodel', icon: 'fas fa-laptop' },
      ]
    },
  ];

  constructor() { }

}
