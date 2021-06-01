import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MetaEntityDto } from 'src/generated/graphql';
import { MetaEntityApiService } from './meta-entity-api.service';

@Component({
  selector: 'app-meta-entity',
  templateUrl: './meta-entity.component.html',
  styleUrls: ['./meta-entity.component.scss'],
})
export class MetaEntityComponent implements OnInit {
  entities: MetaEntityDto[] = [];

  constructor(
    private router: Router,
    private apiService: MetaEntityApiService
  ) {}

  async ngOnInit() {
    await this.refresh();
  }

  async create() {
    const a = await this.apiService.create({
      displayName: `Entity ${this.entities.length}`,
    });
    await this.refresh();
  }

  navigateToDetail(entity: MetaEntityDto) {
    this.router.navigate(['meta-entity/detail', entity?.guid]);
  }

  private async refresh() {
    this.entities = await this.apiService.findAll();
  }
}
