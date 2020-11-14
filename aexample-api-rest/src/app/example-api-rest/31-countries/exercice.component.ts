import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { TutorialService } from '../tutorial.service';

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  endpoint = '/countries';

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
    const url = this.tutorialService.getUrl()  + this.endpoint;
    this.http.get(url)
      .subscribe(
        data => {
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
    const id = this.items[i].id;
    const url = this.tutorialService.getNavigate() + this.endpoint;
    this.router.navigate([url, id]);
  }

}
