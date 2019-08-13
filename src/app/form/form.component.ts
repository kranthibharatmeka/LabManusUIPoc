import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import {Form} from '../form';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, of } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { RestServiceService } from '../rest-service.service';
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})

export class FormComponent implements OnInit {
  dynamicForm:FormGroup;
  
  form: Form = new Form(); 
  constructor(private _http: HttpClient ,private formBuilder: FormBuilder, private restServiceService:RestServiceService ) {
    this.dynamicForm = this.formBuilder.group({
      'fieldName' : ['',Validators.required],
      'fieldType' : ['',Validators.required]
     
    });
   }

  ngOnInit() {
    


  }
// submit form
  submitForm(value:any) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    this.form.fieldName = value.fieldName;
    this.form.fieldType = value.fieldType;
    this.restServiceService.postCall(this.form).subscribe(res =>{
      console.log(res);
    })
  
  }

}
