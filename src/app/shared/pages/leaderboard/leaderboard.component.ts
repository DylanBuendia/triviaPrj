import { Component, OnInit } from '@angular/core';
import { IUserToken } from 'src/app/models/interfaces/user-toker';
import { leaderBoard } from 'src/app/models/mock/leaderboard';

@Component({
  selector: 'game-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard: IUserToken[] = leaderBoard.sort( function(a,b){
    return b.score - a.score
  });

  constructor() { }

  ngOnInit(): void {
    console.log(this.leaderboard);

  }

}
