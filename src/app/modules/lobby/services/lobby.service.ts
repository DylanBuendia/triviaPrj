import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, map, Observable } from 'rxjs';
import { ICategory, ICategoryContainer } from 'src/app/models/interfaces/category.models';
import { IResult, Question } from 'src/app/models/interfaces/trivia.models';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class LobbyService {

 questions$! : Observable<Question[]>;

  constructor(private readonly http: HttpClient) { }

  getEasyQuestion(token:string):void{
    const params = new HttpParams().set('amount', 10).set('difficulty', 'easy').set('token', token);

   this.questions$ = this.http.get<{ results: IResult[] }>(`${environment.apiUrl}`, {params}).pipe(
      map(response=> response.results.map(res=> Question.Build(res)))
    )

  }

  getHardQuestion(token:string): void{
    const params = new HttpParams().set('amount', 15).set('difficulty', 'hard').set('token', token);

    this.questions$ = this.http.get<{ results: IResult[] }>(`${environment.apiUrl}`, {params}).pipe(
      map(response=> response.results.map(res=> Question.Build(res)))
    )

  }

  getCustomQuestion(token:string, questionAmount:number, difficulty:string, category:string, type:string):void{
    const params = new HttpParams().set('amount', questionAmount)?.set('category', category)?.set('difficulty', difficulty)?.set('type', type).set('token', token)

    this.questions$ = this.http.get<{ results: IResult[] }>(`${environment.apiUrl}`, {params}).pipe(
      map(response=> response.results.map(res=> Question.Build(res)))
    )

  }

  getCategory():Observable<ICategory[]>{
    return this.http.get<ICategoryContainer>(`${environment.categoryUrl}`).pipe(
      map(e=>e.trivia_categories)
    )
  }


}
