import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Question } from 'src/app/models/interfaces/trivia.models';
import { StoreService } from 'src/app/services/store.service';
import { NgForm } from '@angular/forms';

import { LobbyService } from '../../services/lobby.service';

@Component({
  selector: 'game-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  questions! : Question[];
  tab = 1;
  categories!:string[];

  constructor( private lobbyService: LobbyService, private store:StoreService) { }

  ngOnInit(): void {
    this.lobbyService.getCategory().subscribe( e=> this.categories = e)

  }

  getEasyMode():void{
    this.lobbyService.getEasyQuestion(this.store.credentials.token).subscribe(data => {
      this.questions = data;
      console.log(this.store.credentials)
    });
  }

  getHardMode():void{
    this.lobbyService.getHardQuestion(this.store.credentials.token).subscribe(data => this.questions = data);
    console.log(this.questions);
  }

submitCustom(f: NgForm){
  console.log(f);
}
}
