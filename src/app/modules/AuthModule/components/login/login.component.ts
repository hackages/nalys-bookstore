import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';

@Component({
  selector: 'bs-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  constructor(private router: Router) {}

  ngOnInit() {
    const login = new FormControl('', [Validators.email, Validators.required]);
    const password = new FormControl('', [
      Validators.minLength(8),
      Validators.required
    ]);
    this.form = new FormGroup({ login, password });
  }

  login() {
    const login = this.form.get('login').value;
    const password = this.form.get('password').value;
    const user = {
      login,
      password
    };

    localStorage.setItem('usertoken', JSON.stringify(user.login));
    this.router.navigate(['dashboard']);
  }
}
