import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'THF-Example';

  menus = [
    { label: 'Hello World', link: './hello-world' },
    { label: 'Meus Locais', link: './meus-locais'}
  ];
}
