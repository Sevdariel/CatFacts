import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cats-facts',
  standalone: true,
  imports: [],
  templateUrl: './cats-facts.component.html',
  styleUrl: './cats-facts.component.scss'
})
export class CatsFactsComponent {

  constructor(private activatedRoute: ActivatedRoute) {
    console.log(activatedRoute);
  }

}
