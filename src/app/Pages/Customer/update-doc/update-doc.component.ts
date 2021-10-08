import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { updateAlert } from './../../SweetAlert/updateAlert'

@Component({
  selector: 'app-update-doc',
  templateUrl: './update-doc.component.html',
  styleUrls: ['./update-doc.component.css']
})
export class UpdateDocComponent implements OnInit {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatecustomer', {
      params: {
        NIC: this.model.NIC, name: this.model.name
      }
    }).subscribe((response) => {
      console.log('response here', response[0].updatecustomer);
    });
    this.showmodel();
    this.initModel();
}
  initModel(){
    return {
      name: '',
      NIC: '',
    };
  }
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new updateAlert('Update?','Sure?','<iframe src="http://www.africau.edu/images/default/sample.pdf" width="100%" height="500px">','warning',true,'Update');
  }
}
