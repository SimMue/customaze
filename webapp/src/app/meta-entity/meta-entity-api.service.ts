import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import {
  CreateMetaEntityDto,
  CreateMetaEntityGQL,
  MetaEntitiesGQL,
  MetaEntityGQL,
  UpdateMetaEntityDto,
  UpdateMetaEntityGQL,
} from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class MetaEntityApiService {
  constructor(
    private metaEntitiesGQL: MetaEntitiesGQL,
    private metaEntityGQL: MetaEntityGQL,
    private createMetaEntityGQL: CreateMetaEntityGQL,
    private updateMetaEntityGQL: UpdateMetaEntityGQL
  ) {}

  async findOne(guid: string) {
    const result = await this.metaEntityGQL.watch({ guid }).refetch();
    return result?.data?.metaEntity;
  }

  async findAll() {
    const result = await this.metaEntitiesGQL.watch().refetch();
    return result?.data?.metaEntities;
  }

  async create(dto: CreateMetaEntityDto) {
    return await this.createMetaEntityGQL
      .mutate({ dto })
      .pipe(map((result) => result?.data?.createMetaEntity))
      .toPromise();
  }

  async update(dto: UpdateMetaEntityDto) {
    return await this.updateMetaEntityGQL
      .mutate({ dto })
      .pipe(map((result) => result?.data?.updateMetaEntity))
      .toPromise();
  }
}
