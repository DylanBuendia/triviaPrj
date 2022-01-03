import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
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

  tab = 1;
  categories!:ICategory[];

  customForm = {
    questions : 10,
    difficulty :'',
    category :'',
    type :''
  };

  constructor( private lobbyService: LobbyService, private store:StoreService) { }

  ngOnInit(): void {
    this.lobbyService.getCategory().subscribe( data=> this.categories = data)

  }
  getEasyMode():void{
    this.lobbyService.getEasyQuestion(this.store.credentials.token);
  }

  getHardMode():void{
    this.lobbyService.getHardQuestion(this.store.credentials.token);
  }

  getCustomMode():void{
    this.lobbyService.getCustomQuestion(this.store.credentials.token, this.customForm.questions , this.customForm.difficulty, this.customForm.category, this.customForm.type)
    // console.log(this.store.credentials.token, this.customForm.questions , this.customForm.difficulty, this.customForm.category, this.customForm.type);
    // this.lobbyService.questions$.subscribe(data => console.log(data))

      }

  submitCustom(f: NgForm){
    console.log(f);
  }
}
