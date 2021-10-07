import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-table-container',
  templateUrl: './table-container.component.html',
  styleUrls: ['./table-container.component.scss']
})
export class TableContainerComponent implements OnInit {

  public config: any = {
    fetch: ()=>{return this._userService.gets()}
  }

  constructor(
    private _userService: UserService,
  ) { }

  ngOnInit(): void {
  }


}
