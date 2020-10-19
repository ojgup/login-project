import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLogin: Boolean;

  constructor(private router: Router, private http: HttpClient) {

  }

  login(form: NgForm) {
    const credentials = {
      'username': form.value.username,
      'password': form.value.password
    }


    this.http.post("http://loginproject-env.eba-x5wuh7qj.us-east-1.elasticbeanstalk.com/api/auth/login", credentials).subscribe( response => {
        const token = (<any>response).token;
        localStorage.setItem("jwt", token);

        this.invalidLogin = false;

        console.log("logged in");
        this.router.navigate(["/login-successful"]);
    }, err => {
      this.invalidLogin = true;
    });

    
  }

  ngOnInit(): void {
  }

}
