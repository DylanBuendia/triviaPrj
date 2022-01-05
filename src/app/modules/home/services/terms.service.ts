import { Injectable } from '@angular/core';
import { ITermsBtn, ITermsContent } from 'src/app/models/interfaces/terms';
import { TERMSBUTTON, TERMSCONTENT } from "src/app/models/mock/terms-mock";

@Injectable({
  providedIn: 'root'
})
export class TermsService {

TButtons: ITermsBtn[] = TERMSBUTTON;
TContent: ITermsContent[] = TERMSCONTENT;

getButton():ITermsBtn[] {
  return this.TButtons;
}

selectContent(param:number):ITermsContent {
  return this.TContent.find(data => data.id == param) as ITermsContent
}

  constructor() { }
}
