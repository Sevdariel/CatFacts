import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private currentTokenSource = new BehaviorSubject<string>('');
  public currentToken$ = this.currentTokenSource.asObservable();

  public login() {
    const token = crypto.randomUUID();
    localStorage.setItem('token', token);
    this.currentTokenSource.next(token)
  }
}
