import { CommonModule } from '@angular/common';
import { ChangeDetectorRef, Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { BehaviorSubject, filter, repeat, take } from 'rxjs';
import { ICatFact } from '../model/cat-facts.model';
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
  public catFacts$ = new BehaviorSubject<Array<ICatFact>>([]);

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
        const routeCatFacts: Array<ICatFact> = routeData['catFacts'];
        const uniqueCatFacts = routeCatFacts.reduce((acc: Array<ICatFact>, curr: ICatFact) => {
          if (!acc.some(obj => obj.data[0] === curr.data[0])) {
            acc.push(curr);
          }
          return acc;
        }, [])
        this.catFacts$.next([...new Set(uniqueCatFacts)]);
      });
  }

  public onScroll() {
    this.catFactsService.getCatFact()
      .pipe(
        repeat(4),
      ).subscribe(catFact => {
        if (!this.catFacts$.value.some(obj => obj.data[0] === catFact.data[0])) {
          this.catFacts$.next([...this.catFacts$.value, catFact]);
        } 
        this.changeDetectorRef.detectChanges();
      }
      )
  }
}
