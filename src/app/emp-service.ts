import { HttpClient } from '@angular/common/http';
import {  inject, Service } from '@angular/core';
import { Observable } from 'rxjs';

@Service()
export class EmpService {
    http=inject(HttpClient);

    url="http://localhost:8080/api/emp/GetEmps";
    getEmployees():Observable<any>
    {   
        return this.http.get(this.url);
    }

    url2="http://localhost:8080/api/emp/GetManagers"
    getManagers()
    {
        return this.http.get<any>(this.url2);
    }
     url3="http://localhost:8080/api/emp/EditEmp/EditEmp/{id}"
     getEmp(data:any){
      return this.http.get<any>(`this.url3'/${data}`);
     }

     addUrl="http://localhost:8080/api/emp/AddEmp"

     addEmp(data:any):Observable<any>{
       return this.http.post<any>(this.addUrl,data)
     }

     
     editUrl="http://localhost:8080/api/emp/EditEmp"

     editEmp(id:number):Observable<any>{
       return this.http.get<any>(`${this.editUrl}/${id}`)
     }

     
}
