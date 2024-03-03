import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, mergeMap, repeat, toArray } from 'rxjs';
import { ICatFact } from '../model/cat-facts.model';

@Injectable({
  providedIn: 'root'
})
export class CatFactsService {

  constructor(private httpClient: HttpClient) { }

  public getCatFact(): Observable<string> {
    return this.httpClient.get<ICatFact>('https://meowfacts.herokuapp.com/')
      .pipe(
        mergeMap(catFact => catFact.data),
      );
  }

  public getCatFacts(number: number): Observable<Array<string>> {
    return this.httpClient.get<ICatFact>('https://meowfacts.herokuapp.com/')
      .pipe(
        repeat(number),
        mergeMap(catFact => catFact.data),
        toArray(),
      );
  }
}
