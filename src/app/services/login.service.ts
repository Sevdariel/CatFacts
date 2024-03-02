import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  public currentUser$ = new BehaviorSubject<string>('');

  public login() {
    const token = crypto.randomUUID();
    localStorage.setItem('token', token);
    this.currentUser$.next(token)
  }
}
