import { inject } from '@angular/core';
import { ResolveFn } from '@angular/router';
import { CatFactsService } from '../services/cat-facts.service';

export const catFactsResolver: ResolveFn<Array<string>> = (route, state) => {
  const catFactsService = inject(CatFactsService);

  return catFactsService.getCatFacts(30);
};
