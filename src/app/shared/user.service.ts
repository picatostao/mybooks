import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url:string='http://localhost:3000'
  public logueado:boolean=false
  public user:User|undefined;
  logged: any;
  constructor(private http:HttpClient) { 
  }
  register(user:User){
    return this.http.post(`${this.url}/register`,user)
  }
  login(user:User){
    return this.http.post(this.url+"/login",user)
  }
  update(user:User){
    return this.http.put(this.url+'/update',user)
  }
}
