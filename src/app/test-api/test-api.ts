import { Component } from '@angular/core';
import { EmpService } from '../emp-service';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { error } from 'console';

@Component({
  imports: [CommonModule,ReactiveFormsModule],
  selector: 'app-test-api',
  styleUrl: './test-api.scss',
  templateUrl: './test-api.html',
})
export class TestAPI {
  constructor(private service:EmpService)
  {
    this.getAllEmp();
    this.getAllManagers();
  }
  ename=""
  esalary=""
  mname=""
  emps=new FormGroup({
    ename:new FormControl(this.ename),
    esalary:new FormControl(this.esalary),
    mid:new FormControl(''),
  });

  allemps:any;
  getAllEmp()
  {
    this.service.getEmployees().subscribe({
      next:res=>{
      
        this.allemps=res;
      },
      error:err=>{
     
      }
    });
  }

  SaveEmp(data:any)
  {
    console.log(data);
  }

  allmanagers:any;
  getAllManagers()
  {
    this.service.getManagers().subscribe({
      next:res=>{
        this.allmanagers=res;
      },
      error:err=>{
        console.log(err);
      }
    })
  }

  editEmp(id:number ):any{
   
    this.service.editEmp(id).subscribe({
      next:res=>{
        console.log(res)
        this.ename= res.ename
        this.esalary= res.esalary
        this.mname = res.mname
      },error:res=>{
        
      }
    })
  }

}
