import { UserService } from 'src/app/services/http/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (private readonly userService: UserService){
    this.userService.getLoggedUser();
  }
  title = 'gemt';
}
