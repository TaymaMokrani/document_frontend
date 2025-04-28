import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  email: string = '';
  password: string = '';
  loginError: string = '';

  constructor(private router: Router, private authService: AuthService) {}

  login(): void {
    if (this.email === 'admin@example.com' && this.password === 'password123') {
      this.authService.login();
      this.router.navigate(['/documents']); // or later to admin page
    } else {
      this.loginError = 'Invalid email or password';
    }
  }
}
