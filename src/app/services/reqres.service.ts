import { User } from './../models/User';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ResponseApi } from '../models/ResponseApi';
import { ResponseCreate } from '../models/ResponseCreate';
import { ResponseUpdate } from '../models/ResponseUpdate';

@Injectable({
  providedIn: 'root'
})
export class ReqresService {

  url: string = 'https://reqres.in/api'

  constructor(private http: HttpClient) { }

  getAll():Observable<ResponseApi> {
    const urlApi = `${this.url}/users/`;
    return this.http.get<ResponseApi>(urlApi);
  }

  getOne(id: number): Observable<ResponseApi>{
    const urlApi = `${this.url}/users/${id}`;
    return this.http.get<ResponseApi>(urlApi);
  }

  create(user:ResponseCreate): Observable<ResponseCreate>{
    const urlApi = `${this.url}/users`;
    return this.http.post<ResponseCreate>(urlApi, user);
  }

  update(user: User, id: number): Observable<ResponseUpdate>{
    const urlApi = `${this.url}/users/${id}`
    return this.http.put<ResponseUpdate>(urlApi, user);
  }

  delete(id: number) {
    const urlApi = `${this.url}/users/${id}`
    return this.http.delete(`${this.url}/${id}`);
  }
}
