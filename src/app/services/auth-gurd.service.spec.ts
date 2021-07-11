import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { AuthGurdService } from './auth-gurd.service';
import { RouterTestingModule } from '@angular/router/testing';

describe('AuthGurdService', () => {
  let service: AuthGurdService;

  beforeEach(() => {
    TestBed.configureTestingModule({ imports: [HttpClientTestingModule, RouterTestingModule,] });
    service = TestBed.inject(AuthGurdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
