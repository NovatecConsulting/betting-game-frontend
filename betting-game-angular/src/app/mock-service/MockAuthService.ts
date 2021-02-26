import { of } from 'rxjs';

export class MockAuthService {
  isAuthenticated$ = of(true);

  userSession = {
    authToken: '27turtles',
    userContext: {
      admin: true,
      companyHid: undefined,
      email: 'turtle@place.io',
      id: 1,
      login: 'turtle@place.io',
      name: 'Turtle User',
      roleHids: undefined,
      status: 'ACTIVE'
    },
    currentAplication: {
      canonicalName: 'Terrapinarium',
      description: 'Terrapinarium Desc',
      email: 'turtle@place.io',
      enabled: true,
      firstName: 'Turtle',
      id: 1,
      lastName: 'User',
      name: 'Terrapinarium'
    }
  };
}
