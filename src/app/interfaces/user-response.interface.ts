import { IMeta } from "./meta.interface";
import { IUser } from "./user.interface";


export interface IUserResponse {
    data: IUser[];
    meta: IMeta;
}