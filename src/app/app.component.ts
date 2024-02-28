import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,IndexComponent,RouterLink],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Ma-Caisse';
  stringToEvaluate:string=""
  takeInput(){
    
  }
}
