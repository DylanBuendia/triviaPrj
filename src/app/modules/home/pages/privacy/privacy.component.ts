import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { IPrivacyButton, IPrivacyDescription } from 'src/app/models/interfaces/privacy';
import { PrivacyService } from '../../services/privacy.service';

@Component({
  selector: 'game-privacy',
  templateUrl: './privacy.component.html',
  styleUrls: ['./privacy.component.scss']
})
export class PrivacyComponent implements OnInit {

  buttons!: IPrivacyButton[];
  descriptions!:IPrivacyDescription[];
  content!:IPrivacyDescription;



  constructor(private readonly privacyService:PrivacyService ) { }

  ngOnInit(): void {
    this.privacyService.showButtons().subscribe(response => { 
      this.buttons = response;
      console.log(this.buttons);
    });
    this.selectDescription(1);

  }

  selectDescription(param:number= 1) {
    return this.privacyService.getDescription(param).subscribe(response => this.content = response )
  }

}
