import { Component } from '@angular/core';

@Component({
  selector: 'categories', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[],
  templateUrl: './Categories.component.html'
})

export class CategoriesComponent{
  title = 'Liste de categories';
}
