import { Component } from '@angular/core';

@Component({
  selector: 'addnotes', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[],
  templateUrl: './Addnote.component.html'
})
export class AddNotesComponent{
  title = 'Ajouter une note';
  //jour = this.startDate.day;
  startDate: any;

  constructor() {
    this.startDate = new Date();
  }

  set humanDate(e){
    e = e.split('-');
    let d = new Date(Date.UTC(e[0], e[1]-1, e[2]));
    this.startDate.setFullYear(d.getUTCDate(), d.getUTCMonth(),d.getUTCFullYear());

  }

  get humanDate(){
    return this.startDate.toISOString().substring(0, 10);
  }

}
