import { Component, OnInit } from '@angular/core';
import { CategoriesService } from './Categories.service';
@Component({
  selector: 'categories', // dans une vue il suffira d'utilisé <notes></notes>
  providers:[ CategoriesService ],
  templateUrl: './Categories.component.html'
})

export class CategoriesComponent implements OnInit{
  title = 'Liste de categories';
  public categories: any[];
  constructor(private categoriesService: CategoriesService){}

  ngOnInit(){
    this.categoriesService.getCategorie().subscribe((data) => this.categories = data);
  }

}
