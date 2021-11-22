import { Component } from '@angular/core';
import { faCoffee, faImage, faKhanda } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-webpage';
  faCoffee = faCoffee;
  fakhanda = faKhanda;
  faimage = faImage;

}
