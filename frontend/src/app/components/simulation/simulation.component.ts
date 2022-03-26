import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simulation',
  templateUrl: './simulation.component.html',
  styleUrls: ['./simulation.component.css']
})
export class SimulationComponent implements OnInit {

  constructor() { }

  risk!: string
  value!: number
  roi!:number

  ngOnInit(): void {
  }

  calcRoi():void{
    
    switch(this.risk){
      case '0':
          console.log(this.roi=this.value*0.05)
        break;
           
      case '1':
          this.roi=this.value*0.1;
        break;
      
      case '2':
          this.roi=this.value*0.2;    
  }  
      
  }

}
