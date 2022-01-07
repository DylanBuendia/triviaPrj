import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap,map, Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserToken } from '../models/interfaces/user-toker';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private credentials:IUserToken= {
    userName:'',
    token:'',
    score :0
  }

  private credentialsSubject = new BehaviorSubject<IUserToken>(this.credentials);
  public credentials$ = this.credentialsSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  getToken():Observable<string>{
    const params = new HttpParams().set('command', 'request')

    return this.http.get<{ token: string }>(`${environment.tokenUrl}`, {params})
   .pipe(
    map(response => response.token)
   )
  //  .subscribe(e=> this.credentials.token = e)
  }

  getCredentials(): Observable<IUserToken>{
    return this.credentials$;
  }

  addUserName(name:string): void{
    this.credentials.userName = name;
  }

  addToken(token:string):void{
   this.credentials.token=token
  }
  addScore():void{
    this.credentials.score++;
  }

  resetCredentials(): void{
    this.credentials.userName = '';
    this.credentials.token = '';
    this.credentials.score = 0
  }

  getLeaderboard(): Observable<IUserToken[]>{
    return this.http.get<IUserToken[]>('http://localhost:3000/leaderboard');
  }

  postLeaderboard( param:IUserToken):Observable<IUserToken>{
    const userToAdd = {...param}
    console.log(userToAdd)
    return this.http.post<IUserToken>('http://localhost:3000/leaderboard', userToAdd);
  }


}
