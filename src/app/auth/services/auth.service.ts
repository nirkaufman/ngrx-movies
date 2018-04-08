import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import {Authenticate, User} from '../models/user';

@Injectable()
export class AuthService {

  login({ username, password }: Authenticate): Observable<User> {
    if (username !== 'admin' && password !== 'admin') {
      return throwError('invalid password');
    }
    return of({ name: 'Nir Kaufman' });
  }
}
