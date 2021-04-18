import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  CreateMetaEntityDto,
  CreateMetaEntityGQL,
  MetaEntitiesGQL,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class MetaEntityApiService {
  constructor(
    private metaEntitiesGQL: MetaEntitiesGQL,
    private createMetaEntityGQL: CreateMetaEntityGQL
  ) {}

  async findAll() {
    const result = await this.metaEntitiesGQL.watch().refetch();
    return result?.data?.metaEntities;
  }

  create(dto: CreateMetaEntityDto) {
    return this.createMetaEntityGQL
      .mutate({ dto })
      .pipe(map((result) => result?.data?.createMetaEntity))
      .toPromise();
  }
}
