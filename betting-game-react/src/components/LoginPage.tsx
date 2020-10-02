import React, {FormEvent, useState} from "react";
import {History} from "history"
import {IAuthenticationSystem} from "../AuthenticationSystem";

interface LoginPageProps {
    history: History,
    location: any,
    auth: IAuthenticationSystem
}

export const LoginPage = ({history, location, auth}: LoginPageProps) => {
    const fromPathName = location.state === undefined ? "/" : location.state.from.pathname;
    console.log(fromPathName);
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");

    let login = (e : FormEvent) => {
        e.preventDefault();
        auth.authenticate(
            userName,
            password,
            () => history.replace(fromPathName));
    };

    return (
        <div>
            <p>You must log in to view the page at {fromPathName}</p>
            <form onSubmit={e => login(e)}>
                <label>
                    Name:
                    <input type="text" name="name" required
                           value={userName} onChange={e => setUserName(e.target.value)}/>
                </label>
                <label>
                    Password:
                    <input type="password" name="password" required
                           value={password} onChange={e => setPassword(e.target.value)}/>
                </label>
                <input type="submit" value="Submit"/>
            </form>
        </div>
    );
}