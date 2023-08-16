import { Router } from '@angular/router';
import { User } from './../../../data-acess/models/user.model';
import { BehaviorSubject } from 'rxjs';
import { UserService } from './../../../services/http/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private readonly userService: UserService, private readonly router: Router) {}
   user: User | null = null;
  loggedUserName: string;

  ngOnInit(): void {
    console.log('header-onInit');
    this.userService.logedUser.subscribe((u) => {
      this.user = u;
    });
    this.userService.getLoggedUser();
  }

  get userName(): string{
    return this.user?.name ?? '';
  }

  loginOrLogout(){
    if(this.userName){
      this.logout();
    }
    this.router.navigate(['/login']);
  }

  logout(){
    this.userService.logout();
  }

}
