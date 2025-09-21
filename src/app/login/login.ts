import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.html',
  styleUrls: ['./login.css'],
  imports: [FormsModule,RouterLink]
})
export class Login {

  adminEmail = "admin@example.com";
  adminPassword = "123456";
  email = '';
  password = '';
  message = '';

  constructor(private authservice: AuthService, private router: Router) {
    if(!localStorage.getItem("adminEmail") || !localStorage.getItem("adminPassword")) {
      localStorage.setItem("adminEmail", this.adminEmail);
      localStorage.setItem("adminPassword", this.adminPassword);
    }
  }

  login() {
    const storedEmail = localStorage.getItem("adminEmail");
    const storedPassword = localStorage.getItem("adminPassword");

    if (this.email === storedEmail && this.password === storedPassword) {
      this.authservice.isloged=true;
      this.router.navigate(['/admin']);
    } else if (this.authservice.login(this.email,this.password)) {
            this.authservice.isloged=true;
      this.router.navigate(['/products']);
    } else {
      this.message = "Wrong credentials!";
    }
  }
}
