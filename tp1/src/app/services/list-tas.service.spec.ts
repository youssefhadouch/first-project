import { TestBed } from '@angular/core/testing';

import { ListTasService } from './list-tas.service';

describe('ListTasService', () => {
  let service: ListTasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListTasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
