import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client/core';
import { Apollo, gql } from 'apollo-angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EntityApiService {
  constructor(private apollo: Apollo) {}

  get(): Observable<ApolloQueryResult<unknown>> {
    return this.apollo.watchQuery({
      query: gql`
        {
          entities {
            exampleField
          }
        }
      `,
    }).valueChanges;
  }
}
