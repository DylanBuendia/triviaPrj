import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/models/interfaces/trivia.models';

import { LobbyService } from '../../services/lobby.service';

@Component({
  selector: 'game-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  questions! : Question[];
  active = 0;
  tocken : string = '';

  constructor( private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.lobbyService.getToken().subscribe(data =>this.tocken = data);


  }

  getEasyMode():void{
    this.lobbyService.getEasyQuestion(this.tocken).subscribe(data => {
      this.questions = data;
      console.log(this.questions)
    });
  }

  getHardMode():void{
    this.lobbyService.getHardQuestion(this.tocken).subscribe(data => this.questions = data);
    console.log(this.questions);
  }

}
