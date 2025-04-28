import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInStatus = false;

  constructor() {
    // Check if logged in from localStorage
    const storedStatus = localStorage.getItem('isLoggedIn');
    this.isLoggedInStatus = storedStatus === 'true';
  }

  login(): void {
    this.isLoggedInStatus = true;
    localStorage.setItem('isLoggedIn', 'true');
  }

  logout(): void {
    this.isLoggedInStatus = false;
    localStorage.removeItem('isLoggedIn');
  }

  isLoggedIn(): boolean {
    return this.isLoggedInStatus;
  }
}

