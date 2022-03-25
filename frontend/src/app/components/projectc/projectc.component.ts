import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-projectc',
  templateUrl: './projectc.component.html',
  styleUrls: ['./projectc.component.css']
})
export class ProjectcComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }
  
  navigate():void{
    this.router.navigate(['project/create'])
  }
}
