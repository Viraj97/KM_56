import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../SweetAlert/SweetAlert'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  constructor(private http: HttpClient) { }
  model = this.initModel();
  submitted = false;

  onSubmit() { this.submitted = true; }
  method2() {
    this.http.get('http://127.0.0.1:3000/updatecustomer', {
      params: {
        NIC: this.model.NIC, name: this.model.name, email: this.model.email,
        telephone: this.model.telephone, address: this.model.address
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
      address: '',
      NIC: '',
      telephone: '',
      email: '',
    };
  }
  ngOnInit() {
  }
  showmodel() {
    console.log('accessed');
    new SweetAlert('center','success','Customer '+this.model.NIC+' Updated');
  }
  showmodel2() {
    console.log('accessed');
    new SweetAlert('Update?','Sure?','<iframe src="http://www.africau.edu/images/default/sample.pdf" width="100%" height="500px">');
  }
}
