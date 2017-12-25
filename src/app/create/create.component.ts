import { Component, OnInit } from '@angular/core';
import { TabComponent } from './tab/tab.component';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  Heroes:any[]=[];
  newEntry:string='';
  
 onAdd(newEntry:string)
 {  
   if(!newEntry)
   {
     return;
   }
   else if(this.Heroes.indexOf(newEntry)==-1) 
   {
    this.Heroes.push(newEntry);
    //console.log(this.Heroes);
    this.newEntry='';
    }
 }
 constructor() { }
  ngOnInit() {
  }


}