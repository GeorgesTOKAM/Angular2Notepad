import { Component } from '@angular/core';

@Component({
  selector: 'app-root', // dans une vue il suffira d'utilisé <notes></notes>
  template: `
  <div class="container">

    <div class="row">
      <div class="col-md-6"><br><img src="assets/Angular.png" alt="Photo de montagne" class="img-rounded"><br><br></div>
    </div>


    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <ul class="nav navbar-nav">
          <li><a routerLink="/Notes"> Notes</a></li>
          <li><a routerLink="/AddNotes">Ajouter Notes</a></li>
          <li><a routerLink="/Categories" (click) = "gotocategories">Categories</a></li>
          <li><a routerLink="/Addcategorie">Ajouter Categories</a></li>
        </ul>
      </div><!-- /.container-fluid -->
    </nav>
    <router-outlet></router-outlet>
  </div>`
})

export class AppComponent{
  title = 'Application NotePad';
  gotocategories() : void {
    //this.router.navigate(['/Categories']);
  }
}
