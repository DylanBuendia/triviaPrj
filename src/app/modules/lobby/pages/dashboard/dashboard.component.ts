import { Component, OnInit } from '@angular/core';
import { concatMap } from 'rxjs/operators';
import { Question } from 'src/app/models/interfaces/trivia.models';
import { ICategory } from 'src/app/models/interfaces/category.models';
import { StoreService } from 'src/app/services/store.service';
import { NgForm } from '@angular/forms';

import { LobbyService } from '../../services/lobby.service';

@Component({
  selector: 'game-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  token! : string;
  tab = 0;
  categories!:ICategory[];

  customForm = {
    questions : 10,
    difficulty :'',
    category :'',
    type :''
  };

  constructor( private lobbyService: LobbyService, private store:StoreService) { }

  ngOnInit(): void {
    this.lobbyService.getCategory().subscribe( data=> this.categories = data);
    this.store.getToken().subscribe(data => this.token = data)

  }
  getEasyMode():void{
    this.store.addToken(this.token)
    this.lobbyService.getEasyQuestion(this.token);
    this.store.getCredentials().subscribe(res => console.log(res))

  }

  getHardMode():void{
    this.store.addToken(this.token);
    this.lobbyService.getHardQuestion(this.token);
  }

  getCustomMode():void{
    this.store.addToken(this.token);
    this.lobbyService.getCustomQuestion(this.token, this.customForm.questions , this.customForm.difficulty, this.customForm.category, this.customForm.type);
    this.store.getCredentials().subscribe(res => console.log(res))
  }

}
