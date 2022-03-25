import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) {}

  

create(project: Project): Observable<Project>{
  return this.http.post<Project>('http://localhost:3001/project',project)
}

read():Observable<Project[]>{
  return this.http.get<Project[]>('http://localhost:3001/project')
}
}



