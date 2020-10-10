import { TestBed } from '@angular/core/testing';

import { MatchdayService } from './matchday.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Match, Matchday } from '../model/matchday';
import mock = jest.mock;

describe('MatchdayService', () => {
  let service: MatchdayService;
  let httpClient: HttpClient;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule]
    });
    service = TestBed.inject(MatchdayService);
    httpClient = TestBed.inject(HttpClient);
    httpMock = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should return a matchday on success', (done) => {
    const mockResponse: Matchday = {
      id: 1,
      name: '3. Spieltag',
      firstMatchStartDateTime: undefined,
      lastMatchStartDateTime: undefined,
      matches: []
    };

    service.getCurrentMatchday().subscribe((matchday: Matchday) => {
      console.log(matchday);
      expect(matchday).toBeTruthy();
      expect(matchday.id).toBe(1);
      expect(matchday.name).toEqual('3. Spieltag');
      done();
    });

    const req = httpMock.expectOne('http://localhost:8080/matchdays/current');
    req.flush(mockResponse);
    httpMock.verify();
  });
});
