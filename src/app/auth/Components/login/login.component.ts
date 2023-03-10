import { Router } from '@angular/router';
import { AuthService } from './../../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms'
import { Login } from '../../Context/DTOs';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private _AuthService: AuthService,
    private _Router: Router) { }

  ngOnInit(): void {
  }

  // Create Login Form///////////////////////////
  loginForm = new FormGroup({
    username: new FormControl(null, [Validators.minLength(3), Validators.required]),
    password: new FormControl(null, [Validators.required]),
  })

  // submit login form/////////////////////////////
  login() {
    const data: Login = {
      username: this.loginForm.value['username']!,
      password: this.loginForm.value['password']!
    }
    this._AuthService.login(data).subscribe(res => {
      localStorage.setItem('token', res.token);
      this._Router.navigate(['/home'])
    })
  }

}
