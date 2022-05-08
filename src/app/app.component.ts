import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, FormArray } from '../../node_modules/@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public search: any;
  public materialForm = new FormGroup({
    vehiclesType: new FormControl(''),
      contact: new FormArray([
        new FormGroup({
          contactNames: new FormControl(''),
          contactEmail: new FormControl(''),
          contactNumber: new FormControl(''),
        })
      ]),
      // master: new FormArray([
      //   new FormGroup({
      //     manterId: new FormControl(''),
      //   })
      // ])
  });
  get contact(): FormArray{
    return this.materialForm.get('contact') as FormArray;
  }
  title = 'form-angular';
  public vehiclesTypeName = [
    {name: 'Honda', id: 5452},
    {name: 'Hero', id: 8756},
    {name: 'Maruti', id: 8753},
    {name: 'Toyota', id: 5782},
    {name: 'KIA', id: 1478},
    {name: 'Mahindra', id: 3458},
    {name: 'Tata Motors', id: 6789},
  ];

  constructor(
    private formBuilder: FormBuilder,
  ){
    console.log(this.materialForm.controls['contact'].value);
  }
  ngOnInit(): void{

  }
  contactGroup(): FormGroup{
    return this.formBuilder.group({
      contactNames: new FormControl(''),
      contactEmail: new FormControl(''),
      contactNumber: new FormControl(''),
    })
  }
  addContact(){
    const add = this.materialForm.controls['contact'] as FormArray;
    add.push(this.contactGroup());
    console.log(this.materialForm.get('contact'));

  }
}
