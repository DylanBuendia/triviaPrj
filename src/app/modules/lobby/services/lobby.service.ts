import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { IResult, Question } from 'src/app/models/interfaces/trivia.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {


  constructor(private readonly http: HttpClient) { }




  getToken():Observable<any>{
    const params = new HttpParams().set('command', 'request')

   return this.http.get<any>(`${environment.tokenUrl}`, {params})
   .pipe(
    map(response => response.token)
   )
  }

  getEasyQuestion(tocken:string):Observable<Question[]>{
    const params = new HttpParams().set('amount', 10).set('difficulty', 'easy').set('tocken', tocken);

    return this.http.get<{ results: IResult[] }>(`${environment.apiUrl}`, {params}).pipe(
      map(response=> response.results.map(res=> Question.Build(res)))
    )

  }

  getHardQuestion(tocken:string):Observable<Question[]>{
    const params = new HttpParams().set('amount', 15).set('difficulty', 'hard').set('tocken', tocken);

    return this.http.get<{ results: IResult[] }>(`${environment.apiUrl}`, {params}).pipe(
      map(response=> response.results.map(res=> Question.Build(res)))
    )

  }


}
