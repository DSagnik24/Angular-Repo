import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  name = "Sagnik Dutta";
  x = 20;
  y = 30;
  user1 = "Batman";
  user2 = "Superman";
}
