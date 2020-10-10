import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchdayComponent } from './matchday.component';
import { of } from 'rxjs';
import { MatchdayStateModel } from '../../state/matchday-state';
import { By } from '@angular/platform-browser';
import { defaultMatchday } from '../../mock-data/default.matchday';

describe('MatchdayComponent', () => {
  let component: MatchdayComponent;
  let fixture: ComponentFixture<MatchdayComponent>;
  const mockState: MatchdayStateModel = {
    matchday: defaultMatchday,
    isLoading: false
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatchdayComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchdayComponent);
    component = fixture.componentInstance;
    Object.defineProperty(component, 'matchday$', { writable: true });
    component.matchday$ = of(mockState.matchday);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should contain list of matches', () => {
    const ul = fixture.debugElement.query(By.css('ul'));
    expect(ul.children.length).toEqual(9);
  });
});
