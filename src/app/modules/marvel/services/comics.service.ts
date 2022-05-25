import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ComicModel } from '../models/comic.model';

@Injectable({
  providedIn: 'root'
})
export class ComicsService {

  private BASE_URL: string = 'http://gateway.marvel.com/v1/public/';

  constructor(private _http: HttpClient) { }

  public getComics(): Observable<ComicModel> {
    return this._http.get<ComicModel>(`${ this.BASE_URL }comics?ts=1624327724&apikey=e75d75d77b6aa2c5b313810cc7f4e0b9&hash=f3b12d423ffb036b4ec68fac285aa6f9`);
  }

  public getComicById(id: number): Observable<ComicModel> {
    return this._http.get<ComicModel>(`${ this.BASE_URL }comics?ts=1624327724&apikey=e75d75d77b6aa2c5b313810cc7f4e0b9&hash=f3b12d423ffb036b4ec68fac285aa6f9&id=${id}`);
  }

}
