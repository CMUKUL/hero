import { Component, OnInit, Input} from '@angular/core';



@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TabComponent implements OnInit {
  
  @Input()allTabHeroes:any[];

   DCtabHeroes:any[]=[];
   MARVELtabHeroes:any[]=[];

  goToDC(hero)
  {
    if(this.DCtabHeroes.indexOf(hero)==-1)
   {
     this.DCtabHeroes.push(hero);
     console.log(this.DCtabHeroes);
    }
 }

  goToMARVEL(hero)
  {
    if(this.MARVELtabHeroes.indexOf(hero)==-1)
    {
      this.MARVELtabHeroes.push(hero);
    }  
  }
 
  // Tab Item Component
  index:number;
  currentHero:string;
  goToMARVELfromDC(hero)
  {
    this.currentHero=hero;
    this.index= this.DCtabHeroes.indexOf(hero);
    this.DCtabHeroes.splice(this.index,1);
    this.MARVELtabHeroes.push(this.currentHero);

  }

  goToDCfromMARVEL(hero)
  {
    this.currentHero=hero;
    this.index=this.MARVELtabHeroes.indexOf(hero);
    this.MARVELtabHeroes.splice(this.index,1);
    this.DCtabHeroes.push(this.currentHero);
  }
  constructor() { }

  ngOnInit() {
  }

}
