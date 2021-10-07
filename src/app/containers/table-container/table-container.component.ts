import { Component, OnInit } from '@angular/core';
import { IQueryParams } from 'src/app/interfaces/query-params.interface';
import { IUsersConfig } from 'src/app/interfaces/user-config.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {

  public config: IUsersConfig = {
    fetch: (params?: IQueryParams)=>{return this._userService.gets(params)}
  }

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
  }


}
