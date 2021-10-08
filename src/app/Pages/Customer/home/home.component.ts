import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert';
import { NgModel } from '@angular/forms';
import * as jspdf from 'jspdf';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent {

  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }

  method1() {
      this.http.get('http://127.0.0.1:3000/newcustomer', {
        params: {
          NIC: this.model.NIC, name: this.model.name, address: this.model.address, file: this.model.files
        }
      }).subscribe((response) => {
        console.log('response here', response[0].newcustomer);
      });
      this.showmodel();
      this.initModel();
  }

  initModel(){
    return {
      name: '',
      address: '',
      NIC: '',
      files:'',
    };
  }

  isValidForm(form) {
    return form.form.valid
  }

  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success','Document '+this.model.name+' Saved');
  }

  downloadPDF(){
    const doc = new jspdf();
    doc.text("Rootcode Labs Knowledge Management",80,10);
    doc.text("Document Name :- "+this.model.name,10,30);
    doc.text("Document Type :- "+this.model.address,10,40);
    doc.text("Document ID :- "+this.model.NIC,10,50);
    doc.text("Document :- "+this.model.files,10,60);
    doc.save(this.model.NIC);
  }
}

