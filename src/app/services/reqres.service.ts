import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  url: string = 'https://reqres.in/api/users'

  constructor(private http: HttpClient) { 
    this.getAll();
  }


  getAll(){
    return this.http.get(this.url);
  }

  getOne(id:number){
    return this.http.get(`${this.url}/${id}`);
  }

  create(user: User){
    return this.http.post(this.url, user);
  }

  update(user: User){
    return this.http.put(`${this.url}/ ${user.id}`, user);
  }

  delete(id: number){
    return this.http.delete(`${this.url}/${id}`);
  }
}
