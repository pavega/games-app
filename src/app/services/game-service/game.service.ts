import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable, of } from 'rxjs';
import { catchError, finalize, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private cacheKey = 'gamesCache';
  private cache: any | null = null;

  constructor(private http: HttpClient) {}

  getGames(): Observable<any> {
    return this.getCachedDataOrFetch().pipe(
      catchError((error) => {
        console.error('Error fetching games', error);
        return of([]);
      })
    );
  }

  private getCachedDataOrFetch(): Observable<any> {
    const cachedData = localStorage.getItem(this.cacheKey);

    if (cachedData) {
      this.cache = JSON.parse(cachedData);
      return of(this.cache);
    }

    return this.fetchAndCacheData();
  }

  private fetchAndCacheData(): Observable<any> {
    return this.http.get(environment.apiUrl).pipe(
      tap((resp) => {
        this.cache = resp;
        localStorage.setItem(this.cacheKey, JSON.stringify(resp));
      })
      // finalize(() => {
      // })
    );
  }
}
