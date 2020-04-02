import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { FaqsItem } from './faqs-item';
import {HttpParams, HttpClientModule, HttpClient} from '@angular/common/http';

@Injectable()
export class FaqsService {
  
  constructor(private httpClient: HttpClient) { 7
  }

  getFaqList(): Observable<FaqsItem[]> {
    let httpParams = new HttpParams();
    return this.httpClient.get<FaqsItem[]>('/api/faqs');
  }
}
