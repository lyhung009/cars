import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import gql from 'graphql-tag';
import {Apollo} from 'apollo-angular';
import {ApolloQueryResult} from 'apollo-client';

@Injectable()
export class CarService {
  readonly getAllItems = gql`
      query items {
        allItems{
          id
          make
          rating
          voted
          mileage
          imagesCount
         }
      }
    `;

  readonly getItem = gql`
      query items($start: Int!) {
        allItems(page: $start, perPage: 1) {
          id
          make
          sellerCompany
          sellerName
          equipment
          description
          sellerEmail
          sellerPhone
          imagesCount
        }
      }
    `;

  constructor(private apollo: Apollo) {
  }

  getAll(): Observable<ApolloQueryResult<any>> {
    return this.apollo.query({
      query: this.getAllItems
    });
  }

  get(id: number): Observable<any> {
    return this.apollo.query({
      query: this.getItem,
      variables: {
        start: id - 1
      }
    });
  }
}
