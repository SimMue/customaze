import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import { AppRoutingModule } from '../app-routing.module';
import { ColumnComponent } from './column/column.component';
import { DateColumnComponent } from './column/date-column/date-column.component';
import { TableComponent } from './table.component';

@NgModule({
  declarations: [ColumnComponent, DateColumnComponent, TableComponent],
  imports: [
    AppRoutingModule,
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatToolbarModule,
  ],
  exports: [ColumnComponent, DateColumnComponent, TableComponent],
})
export class TableModule {}
