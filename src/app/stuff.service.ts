import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';


interface Stuff {
  num: number;
}


@Injectable({
  providedIn: 'root'
})
export class StuffService {

  constructor(private http: HttpClient) { }

  fetch(): Observable<number> {
    return this.http.get<Stuff>('/api/stuff').pipe(map(x => x.num));
  }
}
