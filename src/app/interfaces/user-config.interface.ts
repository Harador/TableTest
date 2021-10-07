import { Observable } from "rxjs";
import { IQueryParams } from "./query-params.interface";
import { IUserResponse } from "./user-response.interface";

export interface IUsersConfig {
    fetch: (params?: IQueryParams) => Observable<IUserResponse>;
}