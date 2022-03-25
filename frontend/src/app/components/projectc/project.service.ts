import { validateVerticalPosition } from '@angular/cdk/overlay';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import {Observable} from 'rxjs';
import { Project } from './project.model';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private snakbar: MatSnackBar) {}

showMessage(msg:string):void{
  this.snakbar.open(msg,'',{
    duration:3000,
    horizontalPosition:'center',
    verticalPosition:'top'
  })
}  

create(project: Project): Observable<Project>{
  return this.http.post<Project>('http://localhost:3001/project',project)
}

read():Observable<Project[]>{
  return this.http.get<Project[]>('http://localhost:3001/project')
}
}



