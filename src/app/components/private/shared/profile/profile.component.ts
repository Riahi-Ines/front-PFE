import { Component, OnInit, ElementRef, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import * as $ from 'jquery';
import { FormControl, FormBuilder, FormGroup, Validator, Validators } from '@angular/forms'
@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  // variables
  show: boolean;
  show2: boolean;
  public modifyForm: FormGroup;
  constructor(builder: FormBuilder, private elementRef: ElementRef, @Inject(DOCUMENT) private doc) {
    // initialize variables values
    this.show = false;
    this.show2 = false;
    let modifyformscontrol = {
      fullname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(10), Validators.pattern("[A-Z][A-Za-z'é]*")]),
      lastname: new FormControl("", [Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern("[A-Z][A-Za-z 'é]*")]),
      service: new FormControl("", [Validators.required,]),
      function: new FormControl("", [Validators.required,]),
      photo: new FormControl("", [Validators.required,]),
      email: new FormControl("", [Validators.required, Validators.email, Validators.pattern("^[a-z][a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@+asteelflash+.com")]),
      password: new FormControl("", [Validators.required, Validators.minLength(8), Validators.pattern('(?=.*[A-Za-z])(?=.*[0-9])(?=.*[$@$!#^~%*?&,.<>"\'`\\;:\{\\\}\\\[\\\]\\\|\\\+\\\-\\\=\\\_\\\)\\\(\\\)\\\`\\\/\\\\\\]])[A-Za-z0-9\d$@].{1,}')]),
      repassword: new FormControl("", [Validators.required,]),
    }
    this.modifyForm = builder.group(modifyformscontrol);
  }

  ngOnInit(): void {
    var s1 = document.createElement("script");
    s1.type = "text/javascript";
    s1.src = "assets/js/jquery.min.js";
    this.elementRef.nativeElement.appendChild(s1);

    var s2 = document.createElement("script");
    s2.type = "text/javascript";
    s2.src = "assets/js/popper.min.js";
    this.elementRef.nativeElement.appendChild(s2);

    var s3 = document.createElement("script");
    s3.type = "text/javascript";
    s3.src = "assets/js/bootstrap.min.js";
    this.elementRef.nativeElement.appendChild(s3);

    var s4 = document.createElement("script");
    s4.type = "text/javascript";
    s4.src = "assets/plugins/simplebar/js/simplebar.js";
    this.elementRef.nativeElement.appendChild(s4);

    var s5 = document.createElement("script");
    s5.type = "text/javascript";
    s5.src = "assets/js/sidebar-menu.js";
    this.elementRef.nativeElement.appendChild(s5);

    var s6 = document.createElement("script");
    s6.type = "text/javascript";
    s6.src = "assets/js/app-script.js";
    this.elementRef.nativeElement.appendChild(s6);
  }
  // click event functions toggle
  showpassword() {
    this.show = !this.show;
  }
  showpassword2() {
    this.show2 = !this.show2;
  }
  get fullname() { return this.modifyForm.get('fullname') }
  get lastname() { return this.modifyForm.get('lastname') }
  get service() { return this.modifyForm.get('service') }
  get function() { return this.modifyForm.get('function') }
  get photo() { return this.modifyForm.get('photo') }
  get email() { return this.modifyForm.get('email') }
  get password() { return this.modifyForm.get('password') }
  get repassword() { return this.modifyForm.get('repassword') }
  get chek() { return this.modifyForm.get('chek') }

  modifyUser() {
    console.log(this.modifyForm.value)
  }

}
