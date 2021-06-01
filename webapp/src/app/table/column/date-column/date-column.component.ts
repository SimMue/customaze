import { Component, Input, ViewChild } from '@angular/core';
import { ColumnComponent } from '../column.component';

@Component({
  selector: 'app-date-column',
  templateUrl: './date-column.component.html',
  styleUrls: ['./date-column.component.scss'],
  providers: [{ provide: ColumnComponent, useExisting: DateColumnComponent }],
})
export class DateColumnComponent extends ColumnComponent {
  @Input()
  property = '';
  @Input()
  title = '';
  @ViewChild('header', { static: true })
  header: any;
  @ViewChild('body', { static: true })
  body: any;
}
