import { Component } from '@angular/core';
import {GithubService} from './services/github.service';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-default">
      <div class="container">
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="#">github search</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
          </ul>
        </div><!--/.nav-collapse -->
      </div>
    </nav>
    <div class="container">
      <app-profile></app-profile>
    </div>`,
  //styleUrls: ['./app.component.css'],
  providers: [GithubService]
})
export class AppComponent {
  title = 'app works!';
}
