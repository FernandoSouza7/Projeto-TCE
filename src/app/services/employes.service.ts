import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { EmployesModule } from '../models/employes/employes.module';
  
@Injectable({
  providedIn: 'root'
})
export class EmployesService {

  baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) { }

  findAll() : Observable<EmployesModule[]>{
    return this.http.get<EmployesModule[]>(`${this.baseUrl}/employee`);
  }
  

  create(employe: EmployesModule): Observable<EmployesModule>{
    return this.http.post<EmployesModule>(`${this.baseUrl}/employee/create`, employe)
  }
}
