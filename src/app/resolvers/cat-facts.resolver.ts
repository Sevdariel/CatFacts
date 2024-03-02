import { ResolveFn } from '@angular/router';
import { CatFactsService } from '../services/cat-facts.service';
import { inject } from '@angular/core';
import { ICatFact } from '../model/cat-facts.model';

export const catFactsResolver: ResolveFn<Array<ICatFact>> = (route, state) => {
  const catFactsService = inject(CatFactsService);

  return catFactsService.getCatFacts(30);
};
