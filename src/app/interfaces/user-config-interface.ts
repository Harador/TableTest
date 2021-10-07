import { Observable } from "rxjs";
import { IUser } from "./user-interface";

export interface IUsersConfig {
    fetch: () => Observable<IUser[]>;
}