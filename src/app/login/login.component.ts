import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import { ILoginForm } from '../model/cat-facts.model';

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
export class LoginComponent implements OnInit {

  @HostListener('submit')
  public submitListener() {
    if (!this.loginForm.valid) {
      this.loginFormValidationAfterSubmit = true;
    } else { this.loginFormValidationAfterSubmit = false }
  }

  public loginForm: FormGroup;
  public loginFormValidationAfterSubmit: boolean = false;

  constructor(
    private loginService: LoginService,
    private router: Router,
    private formBuilder: FormBuilder,
  ) { }

  public ngOnInit(): void {
    this.loginForm = this.formBuilder.nonNullable.group<ILoginForm>({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public login() {
    if (this.loginForm.valid) {
      this.loginService.login();
      this.router.navigateByUrl('/facts')
    }
  }
}
