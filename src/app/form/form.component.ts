import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { DynamicGrid } from '../form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RestServiceService } from '../rest-service.service';
import { ToastrService } from 'ngx-toastr'; 

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
    
    constructor(private toastr: ToastrService) { }  
    
    dynamicArray: Array<DynamicGrid> = [];  
    newDynamic: any = {};  
    ngOnInit(): void {  
        this.newDynamic = {fieldName: "", fieldType: "",fieldArchive:""};  
        this.dynamicArray.push(this.newDynamic);  
    }  
    
    addRow(index) {    
        this.newDynamic = {fieldName: "", fieldType: "",fieldArchive:""};  
        this.dynamicArray.push(this.newDynamic);  
        this.toastr.success('New row added successfully', 'New Row');  
        console.log(this.dynamicArray);  
        return true;  
    }  
      
    deleteRow(index) {  
        if(this.dynamicArray.length ==1) {  
          this.toastr.error("Can't delete the row when there is only one row", 'Warning');  
            return false;  
        } else {  
            this.dynamicArray.splice(index, 1);  
            this.toastr.warning('Row deleted successfully', 'Delete row');  
            return true;  
        }  
    }  
    
// submit form
/*  submitForm(value:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.form.fieldName = value.fieldName;
    this.form.fieldType = value.fieldType;
    this.restServiceService.postCall(this.form).subscribe(res =>{
      console.log(res);
    })
  
  }*/

}
