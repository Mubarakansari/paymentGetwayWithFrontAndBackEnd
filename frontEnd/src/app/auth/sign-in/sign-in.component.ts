import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      userName: ['', [Validators.required, Validators.minLength(3)]],
      password: ['', [Validators.required]]
    })
  }

save() {
  console.log("Save Call", this.form.value);
  this.submitted = true;
  this.http.get("/fetch").subscribe(res => {
    console.log("res>>", res);    
    this.router.navigate(['/sign-up']);
  }, err => {
    console.log("Error>>", err);    
  });
}

  get signInFormController() {
    return this.form.controls;
  }
}
