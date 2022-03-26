import { TestService } from './../../test.service';
import { ProjectService } from './project.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'
import { Project } from './project.model';

@Component({
  selector: 'app-projectc',
  templateUrl: './projectc.component.html',
  styleUrls: ['./projectc.component.css']
})
export class ProjectcComponent implements OnInit {

  projs: string='test'
  projects: Project[]=[]

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.projectService.read().subscribe(readprojects=>{
      this.projects = readprojects;
      console.log(this.projects)
    })
  }
  editproject():void{
    console.log(this.projs)
  }

  navigate(route: string){
    this.router.navigate([route])
  }
}
