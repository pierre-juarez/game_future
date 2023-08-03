import { TestBed } from '@angular/core/testing';

import { GameServiceService } from './game-service.service';
import { HttpClientModule } from '@angular/common/http';

describe('GameServiceService', () => {
  let service: GameServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule]
    });
    service = TestBed.inject(GameServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
