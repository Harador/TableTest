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

import { MyCellDirective } from 'src/app/directives/my-cell.directive';

import { IUser } from 'src/app/interfaces/user.interface';
import { IUsersConfig } from 'src/app/interfaces/user-config.interface';
import { IMeta } from 'src/app/interfaces/meta.interface';

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

  public meta!: IMeta;

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
    this.config.fetch(this.meta).subscribe(
      (data) => {
        console.log(data)
        this.users = data.users;
        this.meta = data.meta;
        this._changeRef.markForCheck();
      }
    );
  }

}
