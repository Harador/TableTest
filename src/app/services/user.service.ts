import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private _users = [
    {
      name: "Alex",
      age: 63,
    },
    {
      name: "Biba",
      age: 60,
    },
    {
      name: "Boba",
      age: 61,
    },
    {
      name: "Ded",
      age: 30,
    },
    {
      name: "Cock",
      age: 11,
    },
  ]

  constructor() { }

  public gets():Observable<any>{
    return of(this._users)
  }
}
