import { Router } from '@angular/router';
import { ProjectService } from './../projectc/project.service';
import { Component, OnInit } from '@angular/core';
import { Project } from '../projectc/project.model';

@Component({
  selector: 'app-projectcreate',
  templateUrl: './projectcreate.component.html',
  styleUrls: ['./projectcreate.component.css']
})
export class ProjectcreateComponent implements OnInit {

  project: Project = {
    name:'',
    logo:'',
    start_date:'',
    end_date:'',
    value: null!,
    risk: 0,
    roi:0,
    members:[] 
  }
  constructor(private projectServive: ProjectService, private router: Router) { }
  

  ngOnInit(): void {
  }

  navigate(): void{
    this.projectServive.create(this.project).subscribe(()=>{
      this.router.navigate(['/projects'])
    })
  }

}
