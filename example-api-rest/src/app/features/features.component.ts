import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  link = 'api-rest';
  data = [
    {
      caption: 'API Rest',
      icon: 'fas fa-chalkboard-teacher',
      items: [
        { name: 'in-memory-web', link: 'in-memory-web', icon: 'fas fa-laptop' },
        { name: 'in-memory-web-from-service', link: 'in-memory-web-from-service', icon: 'fas fa-laptop' },
        { name: 'json-pretty', link: 'json-pretty', icon: 'fas fa-laptop' },
        { name: 'genders', link: 'genders', icon: 'fas fa-laptop' },
        { name: 'genders/0', link: 'genders/0', icon: 'fas fa-laptop' },
        { name: 'continents', link: 'continents', icon: 'fas fa-laptop' },
        { name: 'continents/0', link: 'continents/0', icon: 'fas fa-laptop' },
        { name: 'countries', link: 'countries', icon: 'fas fa-laptop' },
        { name: 'get-all', link: 'get-all', icon: 'fas fa-laptop' },
        { name: 'get-all-one', link: 'get-all-one', icon: 'fas fa-laptop' },
        { name: 'get-all-one-from-service', link: 'get-all-one-from-service', icon: 'fas fa-laptop' },
      ]

    },
  ];

  constructor() { }

}
