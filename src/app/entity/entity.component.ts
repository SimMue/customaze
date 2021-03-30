import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent implements OnInit {
  public form: FormGroup;

  constructor() {
    this.form = new FormGroup({});
    console.log('ok');
  }

  ngOnInit(): void {}
}
