import { Component } from '@angular/core';

@Component({
  selector: 'app-notes', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[],
  templateUrl: './Notes.component.html'
})

export class NotesComponent{
  title = 'Liste de notes';
  addcategogires(){
    console.log("click");
  }
}
