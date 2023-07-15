import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-docdash',
  templateUrl: './docdash.component.html',
  styleUrls: ['./docdash.component.css']
})
export class DocdashComponent {
  title :string;
  constructor(private router:Router){
    this.title='INDIAN MOBILES ';
  }
  logout() {
    // Clear user session, remove tokens, or perform any other necessary actions

    // Redirect to the login page
    this.router.navigate(['/home']);
}
}
