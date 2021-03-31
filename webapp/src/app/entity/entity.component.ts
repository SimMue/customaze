import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { EntityApiService } from '../providers/entity-api.service';

@Component({
  selector: 'app-entity',
  templateUrl: './entity.component.html',
  styleUrls: ['./entity.component.scss'],
})
export class EntityComponent implements OnInit {
  form: FormGroup;

  constructor(private apiService: EntityApiService) {
    this.form = new FormGroup({});
    console.log('ok');
  }

  ngOnInit(): void {
    this.apiService.get().subscribe((response) => console.log(response));
  }
}