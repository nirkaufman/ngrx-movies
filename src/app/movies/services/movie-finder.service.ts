import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/internal/operators';

@Injectable()
export class MovieFinderService {

  private readonly apiKey = 'e1f18fe4';
  private readonly baseUrl = 'http://www.omdbapi.com/';

  constructor(private http: HttpClient) {}

  findMoviesByTitle(title: string) {
    return this.http
      .get(`${this.baseUrl}?apikey=${this.apiKey}&s=${title}`).pipe(
        map((response: any) => response.Search)
      );
  }

  findMoviesById(id: string) {
    return this.http
      .get(`${this.baseUrl}?apikey=${this.apiKey}&i=${id}`);
  }
}
