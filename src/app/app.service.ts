import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(private _httpClient:HttpClient) { }

  getUsers(){
    return this._httpClient.get('https://dummyjson.com/users/')
  }
}
