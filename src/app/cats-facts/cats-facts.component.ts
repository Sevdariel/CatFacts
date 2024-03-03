import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BehaviorSubject, filter, repeat, take } from 'rxjs';
import { CatFactsService } from '../services/cat-facts.service';

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
  public catFacts$ = new BehaviorSubject<Array<string>>([]);

  constructor(
    private catFactsService: CatFactsService,
    private changeDetectorRef: ChangeDetectorRef,
    activatedRoute: ActivatedRoute,
  ) {
    activatedRoute.data
      .pipe(
        take(1),
      )
      .subscribe(routeData => {
        const routeCatFacts: Array<string> = routeData['catFacts'];
        this.catFacts$.next([...new Set(routeCatFacts)]);
      });
  }

  public onScroll() {
    this.catFactsService.getCatFact()
      .pipe(
        filter(catFact => !this.catFacts$.value.includes(catFact)),
        repeat(4),
      ).subscribe(catFact => {
        this.catFacts$.next([...this.catFacts$.value, catFact]);
        this.changeDetectorRef.detectChanges();
      }
      )
  }
}
