import { WrappedNodeExpr } from '@angular/compiler';
import { async, ComponentFixture, fakeAsync, TestBed, tick, waitForAsync } from '@angular/core/testing';
import { AuthService } from '@auth0/auth0-angular';
import { exec } from 'child_process';
import { of } from 'rxjs';
import { MockAuthService } from '../../mock-service/MockAuthService';
import { AuthButtonComponent } from './auth-button.component';

describe('AuthButtonComponent', () => {
  let component: AuthButtonComponent;
  let fixture: ComponentFixture<AuthButtonComponent>;
  let service: MockAuthService;
  beforeEach(() => {
    service = new MockAuthService();
    service.isAuthenticated$ = of(false);
    TestBed.configureTestingModule({
      declarations: [AuthButtonComponent],
      providers: [{ provide: AuthService, useValue: service }]
    }).compileComponents();

    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show log out button', () => {
    service.isAuthenticated$ = of(true);
    TestBed.overrideProvider(AuthService, { useValue: service });

    fixture = TestBed.createComponent(AuthButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    let button = fixture.debugElement.nativeElement.querySelector('#LogOutButton');
    expect(button).toBeTruthy();
  });

  it('should show login button', () => {
    let button = fixture.debugElement.nativeElement.querySelector('#LogInButton');
    expect(button).toBeTruthy();
  });
});
