import { SelectionModel } from '@angular/cdk/collections';
import {
  AfterContentInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  QueryList,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { ColumnComponent } from './column/column.component';

export interface AppColumn {
  id: string;
  name: string;
  config?: any;
}

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
})
export class TableComponent implements OnInit, OnChanges, AfterContentInit {
  @Input()
  source: any[] = [];
  @Output()
  rowClick: EventEmitter<any> = new EventEmitter();
  @Output()
  rowDblClick: EventEmitter<any> = new EventEmitter();
  @ContentChildren(ColumnComponent)
  columns!: QueryList<ColumnComponent>;
  @ViewChild(MatPaginator, { static: true })
  private paginator!: MatPaginator;
  @ViewChild(MatSort, { static: true })
  private sort!: MatSort;

  displayedColumns: string[] = [];
  dataSource: MatTableDataSource<any> = new MatTableDataSource();
  selection: SelectionModel<any> = new SelectionModel<any>(true, []);

  constructor() {}

  ngOnInit(): void {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.source) {
      this.dataSource.data = this.source;
    }
  }

  ngAfterContentInit(): void {
    this.displayedColumns = this.columns.map((c) => c.property);
    this.displayedColumns = ['select', ...this.displayedColumns];
  }

  applyFilter(event: Event): void {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  isAllSelected(): boolean {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  toggleSelection(): void {
    this.isAllSelected()
      ? this.selection.clear()
      : this.dataSource.data.forEach((row) => this.selection.select(row));
  }

  emitRowClick(item: any): void {
    this.rowClick.next(item);
  }

  emitRowDblClick(item: any): void {
    this.rowDblClick.next(item);
  }
}
