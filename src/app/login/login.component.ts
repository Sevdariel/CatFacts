import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  public loginForm = new FormGroup({
    login: new FormControl(),
    password: new FormControl(),
  });

  constructor(
    private loginService: LoginService,
    private router: Router,
  ) { }

  public login() {
    this.loginService.login();
    this.router.navigateByUrl('/facts')
  }
}
