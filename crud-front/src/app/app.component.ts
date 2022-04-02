import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import * as $ from 'jquery';
import {MyService} from './services/my.service'
import {FormGroup,FormBuilder} from '@angular/forms';
import { DogModel } from './models/dog.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'crud-front';
  showModal=false;
  updateForm=false;
  name:any;

  formValue !: FormGroup;
  dogModelObj: DogModel = new DogModel();
  allDogs !: any;

  constructor(private toaster: ToastrService,private myService:MyService,
    private formBuilder:FormBuilder){
    
  }
  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name: [''],
      age: [''],
      breed: [''],
})
this.getAllDogs();
  }


  postDog(){
   

   
      this.dogModelObj.name = this.formValue.value.name;
      this.dogModelObj.age = this.formValue.value.age;
      this.dogModelObj.breed = this.formValue.value.breed;
  
     this.updateForm=false;
      this.myService.createDog(this.dogModelObj).subscribe(res=>{
        
       
        this.toaster.success('Dog created succsefully!');
  
          let ref = document.getElementById('cancel');
          ref?.click();
        this.formValue.reset();
        this.getAllDogs();
      },err=>{
       
        
        this.toaster.error(err.error.errors.name && err.error.errors.name)
        this.toaster.error(err.error.errors.age && err.error.errors.age)
        this.toaster.error(err.error.errors.breed && err.error.errors.breed)
        
      })
   
   

  
  }

  getAllDogs(){
this.myService.getAllDog().subscribe(res=>{
  this.allDogs = res;
})
  }

  deleteDog(row:any){
    console.log(row.id);
    
    this.myService.deleteDog(row.id).subscribe(res =>{
      this.toaster.success('Dog was deleted successfully!')
      this.getAllDogs();
    },err=>{
      this.toaster.error(err.error.errors)
    })
  }

onEdit(row:any){
  this.dogModelObj.id = row.id;
this.formValue.controls['name'].setValue(row.name)
this.formValue.controls['age'].setValue(row.age)
this.formValue.controls['breed'].setValue(row.breed)
}

updateDog(){
  
  this.dogModelObj.name = this.formValue.value.name;
  this.dogModelObj.age = this.formValue.value.age;
  this.dogModelObj.breed = this.formValue.value.breed;

  this.myService.updateDog(this.dogModelObj,this.dogModelObj.id)
  .subscribe(res =>{
    this.toaster.success('Dog was updated successfully!')
    let ref = document.getElementById('cancel');
    ref?.click();
  this.formValue.reset();
  this.getAllDogs();
  })
}


DogSearch(name:any){
this.name = name;
if(name){
  this.myService.searchDog(name)
  .subscribe(res =>{
    this.allDogs = res;
  })
}else{
  this.getAllDogs();
}


}
  

 
}
