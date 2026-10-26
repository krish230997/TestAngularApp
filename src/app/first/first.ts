import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-first',
  styleUrl: './first.scss',
  templateUrl: './first.html',
})
export class First {
  
  testcol:any;


  mycolor:any;
  display(color:any)
  {
    //alert("Function Working");
    this.mycolor=color;
  }

  name="Masstech";

  fn:any;
  sn:any;
  ch:any;
  res:any;
  calci()
  {
    if(this.ch=='+')
    {
      this.res=this.fn+this.sn;
    }
    else if(this.ch=='-')
    {
      this.res=this.fn-this.sn;
    }
    else
    {
      this.res=this.fn*this.sn;
    }
  }
  
}

/* Syntax: 

   funcName(parametrs)
   {

   }

   <input type="submit" (click)="funcName()">


{{}}-one way binding
()-Event binding
[]- property binding
[()] - banana bracket(2 way data binding)
   */