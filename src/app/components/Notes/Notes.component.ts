import { Component } from '@angular/core';
import {NotesService} from "./Notes.service";

@Component({
  selector: 'app-notes', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[NotesService ],
  templateUrl: './Notes.component.html'
})

export class NotesComponent{
  title = 'Liste de notes';

  public Notes: any[];
  constructor(private notesService: NotesService){}

  ngOnInit(){
    this.notesService.getNotes().subscribe((data) => this.Notes = data);
  }

  addcategogires(){
    console.log("click");
  }
}
