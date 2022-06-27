import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { EmployesModule } from '../models/employes/employes.module';
import { InterviewModule } from '../models/interview/interview.module';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class InterviewService {

  baseUrl = environment.baseUrl;
  id: string = this.auth.uid();


  constructor(private http: HttpClient, private auth: AuthService) { }

  create(interview: InterviewModule): Observable<InterviewModule[]>{
    return this.http.post<InterviewModule[]>(`${this.baseUrl}/interview/create`, interview);
  }

  findByManager():Observable<InterviewModule[]>{
    return this.http.get<InterviewModule[]>(`${this.baseUrl}/interview/list/${this.id}`);
  }
}
