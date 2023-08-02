import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Observable, map } from 'rxjs';
import { GameList } from '../models/game.list';
import { GameDetail } from '../models/game.detail';

@Injectable({
  providedIn: 'root'
})
export class GameServiceService {

  private baseURL = "https://free-to-play-games-database.p.rapidapi.com/api";

  constructor(
    private http: HttpClient
  ) { }

  private getHeaders():HttpHeaders{
    const apiKey = 'f991abcf85msh5efe915a3e0f40cp1cf3bcjsne1a397421197';
    return new HttpHeaders({
      'X-RapidAPI-Host': 'free-to-play-games-database.p.rapidapi.com',
      'X-RapidAPI-Key': apiKey
    });
  }

  getGames(): Observable<GameList[]>{
    return this.http.get<GameList[]>(`${this.baseURL}/games`, { headers: this.getHeaders() });
  }

  getDetailGame(id: number): Observable<GameDetail>{
    return this.http.get<GameDetail>(`${this.baseURL}/game?id=${id}`, { headers: this.getHeaders() });
  }

  getGameByTitle(titleFiltered: string): Observable<GameList[]>{
    const params = new HttpParams().set('title',titleFiltered);
    return this.http.get<GameList[]>(`${this.baseURL}/games`, { params }).pipe(
      map(response => response.filter(game => !!game.thumbnail))
    )
  }

}

