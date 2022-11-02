import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  username: string = "";
  password: string = "";
  show: boolean = false;
  loginForm: FormGroup | any;
  @Output() loginFormEmitter= new EventEmitter();

  constructor(private router:Router) {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.pattern(
        '[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]{2,63}$',
      ),]),
      password: new FormControl('', [Validators.required])
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    if (!this.loginForm.valid) {
      return;
    }
    localStorage.setItem('user', this.loginForm.value);
    this.loginFormEmitter.emit('loggedIn');
    this.router.navigate(['/menu']);
  }

}
