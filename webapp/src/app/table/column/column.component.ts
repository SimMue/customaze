import { Component, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-column',
  templateUrl: './column.component.html',
  styleUrls: ['./column.component.scss'],
})
export class ColumnComponent {
  @Input()
  property = '';
  @Input()
  title = '';
  @ViewChild('header', { static: true })
  header: any;
  @ViewChild('body', { static: true })
  body: any;
}
