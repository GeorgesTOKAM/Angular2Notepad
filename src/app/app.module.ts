import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { routes } from './app.routes';
import { NotesComponent } from './components/Notes/Notes.component';
import { CategoriesComponent } from './components/Categories/Categories.component';
import { AppComponent } from './app.component';
import { AddCategoriesComponent } from './components/Categories/Addcategorie.component';
import { AddNotesComponent } from './components/Notes/Addnote.component';
@NgModule({
  declarations: [ AppComponent, NotesComponent,CategoriesComponent, AddCategoriesComponent, AddNotesComponent],
  imports: [ BrowserModule, FormsModule, HttpModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
