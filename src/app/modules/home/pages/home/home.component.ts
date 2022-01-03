import { Component, OnInit } from '@angular/core';
import { LobbyService } from 'src/app/modules/lobby/services/lobby.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'game-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public store:StoreService, private lobby:LobbyService) { }

  saveUserName(param:string){
    this.store.credentials.userName = param;
    this.store.getToken();
  }

  ngOnInit(): void {
  }

}
