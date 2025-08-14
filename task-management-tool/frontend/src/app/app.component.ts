import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div class="app">
      <h1>Task Management Tool</h1>
      <div *ngIf="!isLoggedIn()" class="login">
        <input [(ngModel)]="username" placeholder="Username">
        <input [(ngModel)]="password" type="password" placeholder="Password">
        <button (click)="login()">Login</button>
        <p *ngIf="error">{{error}}</p>
      </div>
      <div *ngIf="isLoggedIn()">
        <button (click)="logout()" style="float: right;">Logout</button>
        <app-task-list></app-task-list>
      </div>
    </div>
  `,
  styles: [`
    .app {
      padding: 20px;
    }
    h1 {
      color: #333;
      text-align: center;
    }
  `]
})
export class AppComponent {
  title = 'Task Management Tool';
  username = '';
  password = '';
  error = '';

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  login(): void {
    if (this.username === 'admin' && this.password === 'password') {
      localStorage.setItem('token', 'demo-token');
      this.error = '';
    } else {
      this.error = 'Invalid credentials';
    }
  }

  logout(): void {
    localStorage.removeItem('token');
  }
}