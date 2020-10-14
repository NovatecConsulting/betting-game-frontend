import { TestBed } from '@angular/core/testing';

import { MatchdayService } from './matchday.service';
import { HttpClient, HttpClientModule, HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Match, Matchday } from '../model/matchday';
import mock = jest.mock;
import { MATCHDAY } from '../mock-data/mock-matchday';

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
    const mockResponse = MATCHDAY;

    service.getCurrentMatchday().subscribe((matchday: Matchday) => {
      expect(matchday).toBeTruthy();
      expect(matchday.id).toBe(3);
      expect(matchday.name).toEqual('3. Spieltag');
      expect(matchday.matches.length).toEqual(3);
      done();
    });

    const req = httpMock.expectOne('http://localhost:8080/matchdays/current');
    req.flush(mockResponse);
    httpMock.verify();
  });

  it('should return an error on unsuccessful fetch', () => {
    const mockResponse = {
      status: 500,
      statusText: 'Internal Server Error'
    };

    service.getCurrentMatchday().subscribe(null, (error: HttpErrorResponse) => {
      expect(error.status).toBe(500);
      expect(error.message).toEqual('Internal Server Error');
    });

    const req = httpMock.expectOne('http://localhost:8080/matchdays/current');
    req.flush(mockResponse);
    httpMock.verify();
  });
});
