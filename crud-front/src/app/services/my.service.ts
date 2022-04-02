import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MyService {

  
  private baseUrl ="http://127.0.0.1:8000/api/dogs";

  constructor(private http:HttpClient) { }

  createDog(data: any){
    return this.http.post(this.baseUrl,data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  getAllDog(){
    return this.http.get<any>(this.baseUrl)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  updateDog(data: any,id:number){
    return this.http.put<any>("http://127.0.0.1:8000/api/dogs/"+id,data)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  deleteDog(id:number){
    return this.http.delete<any>("http://127.0.0.1:8000/api/dogs/"+id)
    .pipe(map((res:any) =>{
      return res;
    }))
  }

  searchDog(name:any){
     return this.http.get("http://127.0.0.1:8000/api/dogs/search/"+name)
     .pipe(map((res:any) =>{
      return res;
    }))
  }
  
    
  
}
