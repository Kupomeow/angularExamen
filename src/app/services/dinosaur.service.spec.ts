import { TestBed } from '@angular/core/testing';

import { DinosaurService } from './dinosaur.service';

describe('DinosaurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DinosaurService = TestBed.get(DinosaurService);
    expect(service).toBeTruthy();
  });
});
