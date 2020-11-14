import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { TutorialService } from '../tutorial.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json', })
};

@Component({
  selector: 'app-prototype',
  templateUrl: './exercice.component.html',
  styleUrls: ['./exercice.component.css']
})
export class ExerciceComponent implements OnInit {

  url: string;
  item: any;
  itemLoaded: boolean;
  endpoint = '/continents';

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient,
    private tutorialService: TutorialService) {

    this.url = this.tutorialService.getUrl() + this.endpoint;

  }

  ngOnInit(): void {
    this.route.params
      .subscribe(params => {
        const id = params['id'];
        if (id !== undefined) {
          this.getItem(this.url, id);
        }
      });
  }

  onCreate(): void {
    this.item.id = null;
    this.item.name = null;
    this.item.wikipediaLink = null;
  }

  onUpdate(): void {
    if (this.item.id === null) {
      this.addItem(this.url, this.item)
        .subscribe(data => {
          this.item = data;
        });
    } else {
      this.updateItem(this.url, this.item, this.item.id)
        .subscribe(data => {
          this.item = data;
        });
    }
  }

  onDelete(id: number): void {
    this.deleteItem(this.url, id)
      .subscribe(data => {
        this.item.id = null;
        this.item.name = null;
        this.item.wikipediaLink = null;
      });
  }

  getItem(url: string, id: number): void {
    this.itemLoaded = false;
    this.http.get(url + '/' + id)
      .subscribe(
        data => {
          this.item = data;
          this.itemLoaded = true;
        }
      );
  }

  addItem(url: string, item: any): Observable<any> {
    return this.http.post<any>(url, item, httpOptions).pipe(
      catchError(this.handleError('addItem', item))
    );
  }

  updateItem(url: string, body: object, id: number): Observable<any> {
    return this.http.put(url + '/' + id, body, httpOptions).pipe(
      catchError(this.handleError<any>('updateItem'))
    );
  }

  deleteItem(url: string, id: number): Observable<any> {
    return this.http.delete<any>(url + '/' + id, httpOptions).pipe(
      catchError(this.handleError<any>('deleteItem'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T): any {
    return (error: any): Observable<T> => {
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string): void {
  }

}
