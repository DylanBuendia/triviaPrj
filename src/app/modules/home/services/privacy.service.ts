import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPrivacyButton, IPrivacyDescription } from 'src/app/models/interfaces/privacy';
import { privacyButtons, privacyDescriptions } from 'src/app/models/mock-data/privacy-mock';
import { map, find } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class PrivacyService {

  private buttons:IPrivacyButton[] = privacyButtons;
  buttonsSubject = new BehaviorSubject<IPrivacyButton[]>(this.buttons);

  private descriptions:IPrivacyDescription[] = privacyDescriptions;
  descriptionsSubject = new BehaviorSubject<IPrivacyDescription[]>(this.descriptions);

  constructor() { }

  showButtons(): Observable<IPrivacyButton[]> {
    return this.buttonsSubject;
  }

  getDescription(param:number):Observable<IPrivacyDescription> {
    return this.descriptionsSubject.pipe
    (map(response => 
      response.find(description => description.id === param))) as Observable<IPrivacyDescription>
  }




}
