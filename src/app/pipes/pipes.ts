import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-pipes',
  styleUrl: './pipes.scss',
  templateUrl: './pipes.html',
})
export class Pipes {

  name="masstech";
  dt=new Date();
  amt=100;

  arrobj=[
    {id:101,name:'Ram',salary:1000},
    {id:102,name:'Shyam',salary:2000},
    {id:103,name:'Ghanshyam',salary:3000},
  ]
  
}
