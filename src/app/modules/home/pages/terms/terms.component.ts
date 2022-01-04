import { Component, OnInit } from '@angular/core';
import { ITermsBtn, ITermsContent } from 'src/app/models/interfaces/terms';
import { TERMSBUTTON } from 'src/app/models/mock/terms-mock';
import { TermsService } from '../../services/terms.service';

@Component({
  selector: 'game-terms',
  templateUrl: './terms.component.html',
  styleUrls: ['./terms.component.scss']
})
export class TermsComponent implements OnInit {
  buttons:ITermsBtn[] = [];
  contents!: ITermsContent[];
  selectedContent!: ITermsContent;

  constructor(public TService: TermsService) { }

  ngOnInit(): void {
    this.buttons = this.TService.getButton()
    this.assignSelectContent(1)
  }

  assignSelectContent(param:number): ITermsContent {
   return this.selectedContent = this.TService.selectContent(param)
  }
}
