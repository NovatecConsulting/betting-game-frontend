import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { MatchdayComponent } from './matchday.component';
import { of } from 'rxjs';
import { MatchdayStateModel } from '../../state/matchday-state';
import { By } from '@angular/platform-browser';
import { MATCHDAY } from '../../mock-data/mock-matchday';
import { NgxsModule } from '@ngxs/store';

describe('MatchdayComponent', () => {
  let component: MatchdayComponent;
  let fixture: ComponentFixture<MatchdayComponent>;
  const mockState: MatchdayStateModel = {
    matchday: MATCHDAY,
    isLoading: false
  };

  beforeEach(
    waitForAsync(() => {
      TestBed.configureTestingModule({
        declarations: [MatchdayComponent],
        imports: [NgxsModule.forRoot([])]
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
    expect(ul.children.length).toEqual(3);
  });
});
