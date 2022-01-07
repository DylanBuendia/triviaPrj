import { Component, OnDestroy, OnInit } from '@angular/core';
import { Question } from 'src/app/models/interfaces/trivia.models';
import { LobbyService } from '../../services/lobby.service';
import { Observable, Subscription } from 'rxjs';
import { StoreService } from 'src/app/services/store.service';
import { IUserToken } from 'src/app/models/interfaces/user-toker';

@Component({
  selector: 'game-game-room',
  templateUrl: './game-room.component.html',
  styleUrls: ['./game-room.component.scss']
})
export class GameRoomComponent implements OnInit, OnDestroy {

    questions!:Question[];

    credential!:IUserToken;

    triviaCredentials$! : Observable<IUserToken>;

    userScore: boolean = false;

    index:number= 0;

    subscriptionCred! : Subscription;
    subscriptionQuest! : Subscription;

    constructor(private lobbyService: LobbyService, private store:  StoreService) { }


    ngOnInit(): void {
      this.subscriptionQuest = this.lobbyService.questions$.subscribe(data =>{
        this.questions = data
        console.log(this.questions)
      });
      this.triviaCredentials$ = this.store.getCredentials();

    }

    checkAnswer(param:string){
      if(param == this.questions[this.index].correctAnswer){
          this.store.addScore();
      }

      if(this.index == this.questions.length-1){
        this.userScore = true;
        this.subscriptionCred = this.triviaCredentials$.subscribe(data => this.credential = data);
        this.store.postLeaderboard(this.credential).subscribe(data => console.log(data));
      }
      this.index++
    }

    ngOnDestroy(): void {
        this.store.resetCredentials();
        this.subscriptionCred.unsubscribe();
        this.subscriptionQuest.unsubscribe();
    }

}
