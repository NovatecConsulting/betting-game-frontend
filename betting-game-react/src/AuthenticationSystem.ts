export interface IAuthenticationSystem {
    isAuthenticated: boolean;

    authenticate(callback: () => void): any;

    signout(callback: () => void): any;
}

export class FakeAuthenticationSystem implements IAuthenticationSystem {
    isAuthenticated: boolean = false;

    authenticate(callback: () => void) {
        this.isAuthenticated = true;
        setTimeout(callback, 100);
    }

    signout(callback: () => void) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

