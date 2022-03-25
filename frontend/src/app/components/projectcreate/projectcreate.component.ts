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

  valueRisk!: string ;
  listRisk: string[]=['baixo','médio','alto'];

  project: Project = {
    name:'',
    logo:'',
    start_date:'',
    end_date:'',
    value: null!,
    risk: '',
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

  calcRoi():void{
    console.log(this.project.risk)
    
    }

  create():void{
    this.projectServive.create(this.project).subscribe()

  }    

}
