import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, take } from 'rxjs';
import { ICatFact } from '../model/cat-facts.model';
import { CatFactsService } from '../services/cat-facts.service';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cats-facts',
  standalone: true,
  imports: [
    CommonModule,
    InfiniteScrollModule,
  ],
  templateUrl: './cats-facts.component.html',
  styleUrl: './cats-facts.component.scss'
})
export class CatsFactsComponent {

  public catFacts = new BehaviorSubject<Array<ICatFact>>([]);

  constructor(
    private catFactsService: CatFactsService,
    activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.data
      .pipe(
        take(1),
      )
      .subscribe(routeData => {
        this.catFacts.next([...new Set(routeData['catFacts'] as Array<ICatFact>)]);
      });
  }

  public sendRequest() {
    console.log('sendRequest')
    this.catFactsService.getCatFact()
      .pipe(
        take(1),
      ).subscribe(catFact => {
        this.catFacts.next([...this.catFacts.value, catFact])
      }
      )
  }
}
