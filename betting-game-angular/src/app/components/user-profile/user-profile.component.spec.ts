import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileComponent } from './user-profile.component';
import { Component } from '@angular/core';
import { AuthService } from '@auth0/auth0-angular';
import { MockAuthService } from '../../mock-service/MockAuthService';

@Component({
  selector: 'app-auth-button',
  template: '<div></div>'
})
class FakeAuthButtonComponent {}

describe('UserProfileComponent', () => {
  let component: UserProfileComponent;
  let fixture: ComponentFixture<UserProfileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UserProfileComponent, FakeAuthButtonComponent],
      providers: [{ provide: AuthService, useValue: MockAuthService }]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
