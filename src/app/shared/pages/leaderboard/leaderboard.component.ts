import { Component, OnInit } from '@angular/core';
import { IUserToken } from 'src/app/models/interfaces/user-toker';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'game-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.scss']
})
export class LeaderboardComponent implements OnInit {

  leaderboard!: IUserToken[];

  constructor(private store:StoreService) { }

  ngOnInit(): void {
    this.store.getLeaderboard().subscribe(data => this.leaderboard = data.sort( function(a:IUserToken,b:IUserToken){
      return b.score - a.score
    }));
    this.store.resetCredential();
  }

}
