import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators'
import { IMeta } from '../interfaces/meta.interface';
import { IQueryParams } from '../interfaces/query-params.interface';

import { IUserResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private _http: HttpClient,

  ) { }

  public gets(params?: IQueryParams):Observable<IUserResponse>{
    return this._http.get<IUserResponse>('').pipe(
      map((data)=>{
        return data = this.changeResponse(data, params);
      })
    )
  }

  public changeResponse(data: IUserResponse, params?: IQueryParams): IUserResponse {
    let users = data.users;
    let meta = data.meta;

    meta = {
      page: params?.page || 0,
      pageSize: params?.pageSize || 4,
      items: users.length,
      pages: Math.ceil(users.length / (params?.pageSize || 4)),
    }

    let startIndex = meta.page * meta.pageSize - meta.pageSize;
    let lastIndex = startIndex + meta.pageSize;
    users = users.slice(startIndex, lastIndex)

    return {users, meta};
  }

}
