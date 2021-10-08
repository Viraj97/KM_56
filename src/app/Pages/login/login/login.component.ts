import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from "@angular/router"

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient, private router: Router) { }

  model = {
    uName: '',
    pw: '',
  };

  ngOnInit() {
    this.getConfig();
  }

  getConfig() {
    this.http.get('http://127.0.0.1:3000/getUsers1').subscribe((res) => {
      this.model.uName = res[0].item;
    });
  }

  method1() {
    this.http.get('http://127.0.0.1:3000/login', {
      params: { user_id: this.model.uName, pw: this.model.pw }
    })
      this.router.navigate(['/home']);
  }

}
