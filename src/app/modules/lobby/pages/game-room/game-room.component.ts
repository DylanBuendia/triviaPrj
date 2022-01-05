import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/interfaces/trivia.models';
import { LobbyService } from '../../services/lobby.service';
import { Observable } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { IUserToken } from 'src/app/models/interfaces/user-toker';

@Component({
  selector: 'game-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit {

    questions!:Question[];


    triviaCredentials$! : Observable<IUserToken>;
    userScore: boolean = false;
    score: number =0;

    index:number= 0;

    constructor(private lobbyService: LobbyService, private store:  StoreService) { }


    ngOnInit(): void {
      this.lobbyService.questions$.subscribe(data =>{
        this.questions = data
        console.log(this.questions)
      });
      this.triviaCredentials$ = this.store.getCredentials();

    }

    checkAnswer(param:string){
      if(param == this.questions[this.index].correctAnswer){
        this.store.credentials.score ++;
      }

      if(this.index == this.questions.length-1){
        this.userScore = true;
      }
      this.index++
    }

}
