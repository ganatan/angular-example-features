import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css']
})
export class FeaturesComponent {
  link = 'template-driven-forms';
  data = [
    {
      caption: 'Template driven forms',
      icon: 'fas fa-chalkboard-teacher',
      items: [
        { name: 'single', link: 'single', icon: 'fas fa-laptop' },
        { name: 'multi', link: 'multi', icon: 'fas fa-laptop' },
        { name: 'init-class', link: 'init-class', icon: 'fas fa-laptop' },
      ]

    },
  ];

  constructor() { }

}
