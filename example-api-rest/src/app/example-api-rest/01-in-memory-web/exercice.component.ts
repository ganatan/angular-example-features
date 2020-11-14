import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-exercice',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  url = 'api';
  endpoint = '/movies';

  items: any;
  itemsLoaded: boolean;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getItems();
  }

  getItems(): void {
    this.itemsLoaded = false;
    const uri = this.url + this.endpoint;
    this.http.get(uri)
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

}
