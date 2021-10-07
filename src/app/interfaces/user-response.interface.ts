import { IMeta } from "./meta.interface";
import { IUser } from "./user.interface";


export interface IUserResponse {
    users: IUser[];
    meta: IMeta;
}