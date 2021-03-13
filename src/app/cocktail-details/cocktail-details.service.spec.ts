import { TestBed } from '@angular/core/testing';

import { CocktailDetailsService } from './cocktail-details.service';

describe('CocktailDetailsService', () => {
  let service: CocktailDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CocktailDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
