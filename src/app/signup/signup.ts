import { Component } from '@angular/core';
import { AuthService } from '../auth';
import { FormsModule } from '@angular/forms';
import { Login } from '../login/login';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-signup',
  imports: [FormsModule, Login, RouterLink],
  templateUrl: './signup.html',
})
export class SignupComponent {
  name: string = '';
  email: string = '';
  phone: string = '';
  password: string = '';
  message: string = '';

  constructor(private authService: AuthService) {}

  signup() {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^01[0-9]{9}$/;
    const passwordRegex = /^(?=.*[A-Z])(?=.*\d).{8,}$/;

    if (!this.name || !this.email || !this.phone || !this.password) {
      this.message = '⚠️ Please fill all fields';
      return;
    }
    if (!emailRegex.test(this.email)) {
      this.message = '❌ Invalid email format';
      return;
    }
    if (!phoneRegex.test(this.phone)) {
      this.message = '❌ Invalid phone number';
      return;
    }
    if (!passwordRegex.test(this.password)) {
      this.message =
        '❌ Password must be at least 8 chars, include one uppercase letter and one number';
      return;
    }

    let success=this.authService.signup(
      this.name,
      this.email,
      this.phone,
     btoa(this.password),
      'user'
    );
    if(success){
    this.message = '✅ Signup successfully You can now login.';
    this.clearForm();}
  }
  clearForm() {
    this.name = '';
    this.email = '';
    this.phone = '';
    this.password = '';
  }
}
