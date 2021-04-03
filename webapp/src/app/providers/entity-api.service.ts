import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { EntitiesGQL, Entity } from 'src/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class EntityApiService {
  constructor(private apollo: Apollo, private entitiesGQL: EntitiesGQL) {}

  get(): Observable<Entity[]> {
    return this.entitiesGQL
      .fetch({})
      .pipe(map((result) => result.data.entities));
  }
}
