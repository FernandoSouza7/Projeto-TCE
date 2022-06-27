import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { CompetenceModule } from '../models/competence/competence.module';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompetenceService {

  baseUrl = environment.baseUrl;

  constructor(private http : HttpClient) { }

  findAll() : Observable<CompetenceModule[]>{
    return this.http.get<CompetenceModule[]>(`${this.baseUrl}/competence`);
  }
  

  create(competence: CompetenceModule): Observable<CompetenceModule>{
    return this.http.post<CompetenceModule>(`${this.baseUrl}/competence/create`, competence)
  }

  searchByName(name: String) : Observable<CompetenceModule[]>{
    return this.http.get<CompetenceModule[]>(`${this.baseUrl}/competence/filter/name/${name}`);
  }
  

}
