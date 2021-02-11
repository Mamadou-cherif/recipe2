import { TestBed } from '@angular/core/testing';

import { ServeRecipeService } from './serve-recipe.service';

describe('ServeRecipeService', () => {
  let service: ServeRecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServeRecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
