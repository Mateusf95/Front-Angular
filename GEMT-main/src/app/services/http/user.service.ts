import { CreateUpdateUserDto } from './../../data-acess/dtos/create-update-user.dto';
import { UserLoginDto } from './../../data-acess/dtos/user-login.dto';
import { User } from './../../data-acess/models/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

constructor(private readonly http: HttpClient) { }
logedUser = new BehaviorSubject<User | null>(null);


getAll(): Observable<User[]>{
  return this.http.get<User[]>('usuarios');
}

getById(id: number): Observable <User>{
  console.log(id);
  return this.http.get<User>(`usuarios/user/${id}`);
}

create(dto: CreateUpdateUserDto): Observable<User>{
  return this.http.post<User>(`usuarios/create`, dto);
}

update(dto: CreateUpdateUserDto): Observable<any>{
  return this.http.post<User>(`usuarios/update/${dto.id}`, dto);
}

login(dto: UserLoginDto): Observable<User>{
  return this.http.post<User>(`usuarios/login`, dto);
}

setLogedUser(user: User){
  // const jsonData = JSON.stringify(user);
  this.logedUser.next(user);
  localStorage.setItem('user', JSON.stringify(user));
}

getLoggedUser() {
  console.log('getLoggedUser1');

  if (localStorage.length > 0) {
    let jsonData = localStorage.getItem('user');
    if (jsonData) {
      console.log('getLoggedUser2');

      const obj = JSON.parse(jsonData);
      this.logedUser.next(obj);
    }
  }
}

logout() {
  if (this.logedUser.value) {
    localStorage.removeItem('user');
    this.logedUser.next(null);
  }
}

}
