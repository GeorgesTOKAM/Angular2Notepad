import { Component } from '@angular/core';

@Component({
  selector: 'Addcategorie', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[],
  templateUrl: './Addcategorie.component.html'
})

export class AddCategoriesComponent{
  title = 'Ajouter une categorie';
}
