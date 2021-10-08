import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SweetAlert } from './../../SweetAlert/SweetAlert';


@Component({
  selector: 'app-customer-update',
  templateUrl: './customer-update.component.html',
  styleUrls: ['./customer-update.component.css']
})
export class CustomerUpdateComponent implements OnInit{
  constructor(private http: HttpClient) {}
  model = this.initModel();
  submitted = false;
  
  initModel(){
    return {
      type: '',
    };
  }
  ngOnInit() {
  }
  showmodel() {
    new SweetAlert('center','success','    <iframe src="https://www.knowledge-management-tools.net/files/A_Synthesis_of_Knowledge_Management_Failure_Factors.pdf" width="100%" height="500px">');
  }
}

