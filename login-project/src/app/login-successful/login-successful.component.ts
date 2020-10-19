import { HttpClient } from '@angular/common/http';
import { ThrowStmt } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login-successful',
  templateUrl: './login-successful.component.html',
  styleUrls: ['./login-successful.component.css']
})
export class LoginSuccessfulComponent implements OnInit {

  customers: any;

  constructor(private http:HttpClient) {}

  ngOnInit(): void {

    this.http.get("http://loginproject-env.eba-x5wuh7qj.us-east-1.elasticbeanstalk.com/api/customers").subscribe(response => {
      this.customers = response; 
    }, err => {
      console.log(err);
    });
  }

}
