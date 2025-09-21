import { Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';
@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor() {}
     isloged=false;
     items=0;
  signup(name: string, email: string, phone: string, password: string, role: string):boolean {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const existing = users.find((u: any) => u.email === email);
    if (existing) {
      alert('❌ Email already exists!');
      return false;
    }
    users.push({ name, email, phone, password, role });
    localStorage.setItem('users', JSON.stringify(users));
    return true;
  }

  login(email: string, password: string) :boolean{
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find((u: any) => u.email === email && atob(u.password) === password);

    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  getCurrentUser() {
    return JSON.parse(localStorage.getItem('currentUser') || 'null');
  }

  logout() {
          this.isloged=false;
    localStorage.removeItem('currentUser');
  }
}
