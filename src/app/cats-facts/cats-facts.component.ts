import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ICatFact } from '../model/cat-facts.model';
import { take } from 'rxjs';

@Component({
  selector: 'app-cats-facts',
  standalone: true,
  imports: [],
  templateUrl: './cats-facts.component.html',
  styleUrl: './cats-facts.component.scss'
})
export class CatsFactsComponent {

  public catFacts: Array<ICatFact> = [];

  constructor(activatedRoute: ActivatedRoute) {
    activatedRoute.data
      .pipe(
        take(1),
      )
      .subscribe(routeData => {
        this.catFacts = routeData['catFacts'];
        this.catFacts = [...new Set(this.catFacts)];
      });
  }
}
