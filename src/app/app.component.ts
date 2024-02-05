import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {HttpClient, HttpParams} from '@angular/common/http';
import {startWith, switchMap, tap} from 'rxjs/operators';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  searchCtrl = new FormControl();
  items: string[] = [];

  constructor(private client: HttpClient) {
  }

  fetch(q?: string): Observable<string[]> {
    let params = new HttpParams();
    if (q) {
      params = params.set('q', q);
    }
    return this.client.get<string[]>('items', {params});
  }

  ngOnInit(): void {
    this.searchCtrl.valueChanges.pipe(
      tap(x => console.log(x)),
      startWith(""),
      switchMap(q => this.fetch(q))
      ).subscribe(items => {
       this.items = items;
    });
  }
}
