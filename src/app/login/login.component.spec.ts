import { CommonModule } from "@angular/common";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ReactiveFormsModule } from "@angular/forms";
import { By } from "@angular/platform-browser";
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { LoginComponent } from "./login.component";

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let loginService: LoginService;
    let router: Router;

    beforeEach(async () => {
        TestBed.configureTestingModule({
            imports: [
                CommonModule,
                ReactiveFormsModule,
                LoginComponent
            ],
            providers: [{
                provide: LoginService
            }],
        }).compileComponents()

        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();

        loginService = TestBed.inject(LoginService);
    })

    it('should create', () => {
        expect(component).toBeTruthy();
    })

    it('should call the login method', () => {
        spyOn(component, 'login');
        const element = fixture.debugElement.query(By.css('button')).nativeElement;
        element.click();
        expect(component.login).toHaveBeenCalledTimes(1);
    })

    it('form should be invalid', async () => {
        component.loginForm.controls.login.setValue('');
        component.loginForm.controls.password.setValue('');

        expect(component.loginForm.valid).toBeFalsy();
    })

    it('form should be valid', async () => {
        component.loginForm.controls.login.setValue('login');
        component.loginForm.controls.password.setValue('password');

        expect(component.loginForm.valid).toBeTruthy();
    })

    it('should call this.loginService.login()', () => {
        component.loginForm.controls.login.setValue('login');
        component.loginForm.controls.password.setValue('password');

        spyOn(loginService, 'login');

        const element = fixture.debugElement.query(By.css('button')).nativeElement;
        element.click();

        expect(loginService.login).toHaveBeenCalledTimes(1);
    })
});
