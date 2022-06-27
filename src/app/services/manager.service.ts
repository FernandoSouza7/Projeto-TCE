import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ManagerModule } from '../models/manager/manager.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class ManagerService {

  baseUrl = environment.baseUrl;
  id: string = this.auth.uid();

  constructor(private http: HttpClient, private auth: AuthService) { }


  findManagerById(): Observable<ManagerModule>{
    return this.http.get<ManagerModule>(`${this.baseUrl}/manager/${this.id}`);
  }

  findAll(): Observable<ManagerModule[]>{
    return this.http.get<ManagerModule[]>(`${this.baseUrl}/manager`);
  }
}
