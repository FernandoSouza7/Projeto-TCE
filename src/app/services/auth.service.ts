import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

   baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) {}

  isAuthtenticate(): boolean{
    if (sessionStorage.getItem('manager_id') == null){
     return false;
    }else{
      return true;
    }
  }
  authtenticate(id: number, password: string) : Observable<number>{
    return this.http.get<number>(`${this.baseUrl}/auth/${id}/${password}`);
  }

  uid(): string { 
    return JSON.parse(sessionStorage.getItem('manager_id') || '{}');
  }

  successAuth(id : number):void{
    sessionStorage.setItem('manager_id', id.toString());
  }

}
