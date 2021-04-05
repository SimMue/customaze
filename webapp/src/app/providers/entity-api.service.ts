import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  CreateEntityDto,
  CreateEntityGQL,
  EntitiesGQL,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class EntityApiService {
  constructor(
    private entitiesGQL: EntitiesGQL,
    private createEntityGQL: CreateEntityGQL
  ) {}

  findAll() {
    return this.entitiesGQL
      .fetch({})
      .pipe(map((result) => result?.data?.entities));
  }

  create(dto: CreateEntityDto) {
    return this.createEntityGQL
      .mutate({ dto })
      .pipe(map((result) => result?.data?.createEntity));
  }
}
