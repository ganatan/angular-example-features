import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { TutorialService } from '../tutorial.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  url: string;
  endpoint = '/continents';

  items: any;
  itemsLoaded: boolean;

  constructor(
    private router: Router,
    private http: HttpClient,
    private tutorialService: TutorialService) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    this.url = this.tutorialService.getUrl();
    let url ='https://api.ganatan.com/continents';
//    let url ='https://jsonplaceholder.typicode.com/photos/1';
//    this.http.get(this.url + this.endpoint)
    this.http.get(url)
      .subscribe(
        data => {
          console.log('0001:' + JSON.stringify(data));
          this.items = data;
          this.itemsLoaded = true;
        }
      );
  }

  onRead(): void {
    this.getItems();
  }

  onReset(): void {
    this.items = null;
  }

  selectItem(i: number): void {
    let id = this.items[i].id;
    this.router.navigate(['api-rest/continents', id]);
  }

}
