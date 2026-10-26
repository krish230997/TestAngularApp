import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  imports: [CommonModule],
  selector: 'app-second',
  styleUrl: './second.scss',
  templateUrl: './second.html',
})
export class Second {
  block=false;

  arrobj=[
    {id:101,name:'Ram',salary:1000},
    {id:102,name:'Shyam',salary:2000},
    {id:103,name:'Ghanshyam',salary:3000},
  ]

  col="green";
}
