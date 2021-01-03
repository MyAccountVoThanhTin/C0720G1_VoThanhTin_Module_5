import {Injectable} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/User';

@Injectable({
  providedIn : "root"
})
export class UsersService {
  constructor(
    private http: HttpClient
  ) {}

  private  baseURL = ' http://localhost:3000/users';

  getAll(): Observable<User[]> {
    return this.http.get<User[]>(this.baseURL).pipe();
  }

  addUser(user:User): Observable<any> {
    return this.http.post(this.baseURL, user);
  }
}
