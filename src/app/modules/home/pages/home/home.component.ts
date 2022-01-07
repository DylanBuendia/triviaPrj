import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { IUserToken } from 'src/app/models/interfaces/user-toker';
import { LobbyService } from 'src/app/modules/lobby/services/lobby.service';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'game-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private store:StoreService, private lobby:LobbyService) {}

  ngOnInit(): void {
  }

  saveUserName(param:string){
    this.store.addUserName(param);

  }
}
