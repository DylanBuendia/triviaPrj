import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { tap,map, Observable, BehaviorSubject } from 'rxjs';

import { environment } from 'src/environments/environment';
import { IUserToken } from '../models/interfaces/user-toker';
import { leaderBoard } from '../models/mock/leaderboard';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  credentials:IUserToken= {
    userName:'',
    token:'',
    score :0
  }

  // leaderBoard!: IUserToken[];

  private credentialsSubject = new BehaviorSubject<IUserToken>(this.credentials);
  public credentials$ = this.credentialsSubject.asObservable();

  constructor(private readonly http: HttpClient) { }

  getToken():void{
    const params = new HttpParams().set('command', 'request')

    this.http.get<any>(`${environment.tokenUrl}`, {params})
   .pipe(
    map(response => response.token)
   ).subscribe(e=> this.credentials.token = e)
  }

  getCredentials(): Observable<IUserToken>{
    return this.credentials$;
  }

  addUserName(name:string):  Observable<string>{
    return this.credentials$.pipe(
    map(res => res.userName = name))
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
