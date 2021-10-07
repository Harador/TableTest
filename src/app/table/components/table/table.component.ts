import { 
  Component,
  OnInit,
  Input,
  ContentChildren, 
  TemplateRef, 
  AfterViewInit, 
  QueryList, 
  ChangeDetectionStrategy, 
  ChangeDetectorRef,
} from '@angular/core';

import { MyCellDirective } from '../directives/my-cell.directive';

import { IUser } from '../interfaces/user-interface';
import { IUsersConfig } from '../interfaces/user-config-interface';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TableComponent implements OnInit, AfterViewInit {

  @Input()
  public config!: IUsersConfig;

  @ContentChildren(MyCellDirective, {read: TemplateRef}) 
  public queryList!: QueryList<MyCellDirective>;

  public users!: IUser[];

  //массив с ссылками на шаблоны ячеек таблицы
  public templatesArray!: TemplateRef<MyCellDirective>[];

  constructor(
    private _changeRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  ngAfterViewInit(): void {
    this.templatesArray = this.queryList.toArray() as TemplateRef<MyCellDirective>[];

    // костыль чтобы избежать ошибки "Expression has changed after it was checked"
    this._changeRef.detectChanges();
  }

  public loadUsers(): void {
    this.config.fetch().subscribe(
      (users:IUser[]) => { this.users = users }
    );
  }

}
