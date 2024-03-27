import { Component } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  user!: User;
  constructor(private userService:UserService) {

    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    });
   }
  
  ngOnInit(): void {
  }

  logout(){
    this.userService.logout();
  }

  get isAuth(){
    return this.user.token;
  }
}
