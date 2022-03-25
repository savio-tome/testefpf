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
    roi:null!,
    members:[] 
  }
  constructor(private projectServive: ProjectService, private router: Router) { }
  

  ngOnInit(): void {
  }

  navigate(): void{
      this.router.navigate(['/projects'])
    }

  calcRoi(): void{
    switch(this.project.risk){
        case 'baixo':
            this.project.roi=this.project.value*0.05;
          break;
             
        case 'médio':
            this.project.roi=this.project.value*0.1;
          break;
        
        case 'alto':
            this.project.roi=this.project.value*0.2;    
    }  
  }

  create():void{
    this.projectServive.create(this.project).subscribe(()=>{
      this.projectServive.showMessage('projeto criado com sucesso!')
    })

  }    

}
