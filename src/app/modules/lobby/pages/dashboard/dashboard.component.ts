import { Component, OnInit } from '@angular/core';

import { LobbyService } from '../../services/lobby.service';

@Component({
  selector: 'game-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  active = 0;
  defaultMode : boolean = true;
  customMode = false;
  tocken : string = '';

  constructor( private lobbyService: LobbyService) { }

  ngOnInit(): void {
    this.lobbyService.getToken().subscribe(data =>this.tocken = data);

  }

  selectDefault(param:boolean): void{
    this.defaultMode = true;
    this.customMode = false;
  }

  selectCustom(param:boolean): void{
    this.customMode = true;
    this.defaultMode= false;
  }

  getMode():any{
    this.lobbyService.getEasyQuestion(this.tocken).subscribe(data => console.log(data));
  }

}
