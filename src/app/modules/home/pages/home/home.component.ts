import { Component, OnInit } from '@angular/core';
import { StoreService } from 'src/app/services/store.service';

@Component({
  selector: 'game-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {



  constructor(public store:StoreService) { }

  saveUserName(param:string){
    this.store.name = param;
  }

  ngOnInit(): void {
  }

}
