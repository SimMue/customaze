import { Component, OnInit } from '@angular/core';
import { MetaEntityDto } from 'src/generated/graphql';
import { MetaEntityApiService } from './meta-entity-api.service';

@Component({
  selector: 'app-meta-entity',
  templateUrl: './meta-entity.component.html',
  styleUrls: ['./meta-entity.component.scss'],
})
export class MetaEntityComponent implements OnInit {
  entities: MetaEntityDto[] = [];

  constructor(private apiService: MetaEntityApiService) {}

  private async refresh() {
    this.entities = await this.apiService.findAll();
  }

  async ngOnInit() {
    await this.refresh();
  }

  async create() {
    const a = await this.apiService.create({
      displayName: `Entity ${this.entities.length}`,
    });
    await this.refresh();
  }
}
