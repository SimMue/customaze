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
  isLoading: boolean = true;

  constructor(private apiService: EntityApiService) {
    this.form = new FormGroup({});
  }

  ngOnInit(): void {
    this.apiService.get().subscribe((result: any) => {
      console.log(result?.data?.entities);
      console.log(result.loading);
      console.log(result.error);
      this.isLoading = result.loading;
    });
  }
}
