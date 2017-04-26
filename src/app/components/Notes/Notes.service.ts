import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'; //Reactive extensions for JavaScript
// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class NotesService{
  constructor(public http: Http){}

  getNotes(){
    return this.http.get('http://localhost:8000/notepad/api/notes')
      .map(res => res.json());
  }

}
