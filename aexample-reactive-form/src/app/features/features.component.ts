import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  link = 'reactive-form';
  data = [
    {
      caption: 'reactive-form',
      icon: 'fas fa-chalkboard-teacher',
      items: [
        { name: 'prototype', link: 'prototype', icon: 'fas fa-laptop' },
        { name: 'form-control', link: 'form-control', icon: 'fas fa-laptop' },
        { name: 'form-control-class', link: 'form-control-class', icon: 'fas fa-laptop' },
        { name: 'form-group', link: 'form-group', icon: 'fas fa-laptop' },
        { name: 'form-builder', link: 'form-builder', icon: 'fas fa-laptop' },
        { name: 'form-builder-nested', link: 'form-builder-nested', icon: 'fas fa-laptop' },
        { name: 'form-array', link: 'form-array', icon: 'fas fa-laptop' },
        { name: 'form-multi', link: 'form-multi', icon: 'fas fa-laptop' },
      ]
    },
  ];

  constructor() { }

}
