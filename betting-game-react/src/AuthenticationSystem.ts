export interface IAuthenticationSystem {
    isAuthenticated: boolean;
    userName : string
    authenticate(userName: string,
                 password: string,
                 callback: () => void): any;

    signout(callback: () => void): any;
}

export class FakeAuthenticationSystem implements IAuthenticationSystem {
    userName : string = localStorage.getItem("userName") || "";
    isAuthenticated: boolean = this.userName !== "";

    authenticate(
        userName:string,
        password:string,
        callback: () => void) {
        this.userName = userName;
        this.isAuthenticated = true;
        localStorage.setItem("userName", this.userName);
        setTimeout(callback, 100);
    }

    signout(callback: () => void) {
        this.userName = "";
        this.isAuthenticated = false;
        setTimeout(callback, 100);
    }
}

