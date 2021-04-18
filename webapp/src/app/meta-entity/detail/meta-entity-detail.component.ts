import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-meta-entity-detail',
  templateUrl: './meta-entity-detail.component.html',
  styleUrls: ['./meta-entity-detail.component.scss'],
})
export class MetaEntityDetailComponent implements OnInit {
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {}
}
