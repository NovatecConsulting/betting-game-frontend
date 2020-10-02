export interface IAuthenticationSystem {
    isAuthenticated: boolean;
    userName : string
    authenticate(userName: string,
                 password: string,
                 callback: () => void): any;

    signout(callback: () => void): any;
}

export class FakeAuthenticationSystem implements IAuthenticationSystem {
    isAuthenticated: boolean = false;
    userName : string = "";

    authenticate(
        userName:string,
        password:string,
        callback: () => void) {
        this.isAuthenticated = true;
        this.userName = userName;
        setTimeout(callback, 100);
    }

    signout(callback: () => void) {
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

