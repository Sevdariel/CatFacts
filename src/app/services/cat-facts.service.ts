import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, repeat, toArray } from 'rxjs';
import { ICatFact } from '../model/cat-facts.model';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private httpClient: HttpClient) { }

  public getCatFact() {
    return this.httpClient.get('https://meowfacts.herokuapp.com/');
  }

  public getCatFacts(number: number): Observable<Array<ICatFact>> {
    return this.httpClient.get<ICatFact>('https://meowfacts.herokuapp.com/')
      .pipe(
        repeat(number),
        toArray(),
      );
  }
}
