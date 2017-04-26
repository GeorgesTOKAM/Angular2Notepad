import {Injectable} from "@angular/core";
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx'; //Reactive extensions for JavaScript
// Import RxJs required operator methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class CategoriesService{
  constructor(public http: Http){}

  getCategorie(){
    return this.http.get('http://127.0.0.1:8000/notepad/api/Categories2')
    .map(res => res.json());
  }

}
