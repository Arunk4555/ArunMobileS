import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';
@Component({
  selector: 'app-adminlogin',
  templateUrl: './adminlogin.component.html',
  styleUrls: ['./adminlogin.component.css']
})
export class AdminloginComponent {
  username = 'user'
    password = ''
    invalidLogin = false

  constructor(private router:Router, public loginservice: AuthenticationService) { }



checkadminLogin() {
  if (this.loginservice.authenticate(this.username, this.password)
  ) {
    this.router.navigate(['docdash'])

    this.invalidLogin = false
  } else
  {
    this.invalidLogin = true
    alert("Wrong Credentials");
    this.router.navigate(['home'])
  }

}
}