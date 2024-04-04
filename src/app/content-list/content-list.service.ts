import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IContentList } from './content-list';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ContentListService {
  private baseEnpoint = 'http://localhost:8080';
  private contentUrl = 'content';

  constructor(private http: HttpClient) {}

  getMoviesList(): Observable<IContentList[]> {
    return this.http.get<IContentList[]>(
      `${this.baseEnpoint}/${this.contentUrl}/movie/all`
    );
  }
}
