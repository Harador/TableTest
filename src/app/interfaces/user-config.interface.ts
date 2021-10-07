import { Observable } from "rxjs";
import { IUserResponse } from "./user-response.interface";

export interface IUsersConfig {
    fetch: () => Observable<IUserResponse>;
}