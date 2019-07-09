import { Injectable } from '@angular/core';

import { ApiService } from '../api';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MiscellaneousService {

  constructor(
    private api$: ApiService
  ) { }


    getMiscellaneousAnnounces(): Observable<any> {
      // this.api$
      //   .get<any>('');

        return of(new Array(10));
    }

}
