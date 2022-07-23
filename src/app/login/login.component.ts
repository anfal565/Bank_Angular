import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  aim = "Your perfect Banking partner"


  account = "enter your acc here"

  acno = ""
  pswd = ""
  //data base - Bank
  userDetails: any = {
    1000: { acno: 1000, username: 'Neer', password: 1000, balance: 50000 },
    1001: { acno: 1001, username: 'Laisha', password: 1001, balance: 4000 },
    1002: { acno: 1002, username: 'Anfal', password: 1002, balance: 6000 },

  }

  constructor() { }

  ngOnInit(): void {
  }

  //accnochange
  acnochange(event: any) {
    this.acno = event.target.value
    console.log(this.acno);

  }

  //pswdchange
  pswdchange(event: any) {
    this.pswd = event.target.value
    console.log(this.pswd);

  }

  //login_page
  // login() {
  //   var acno = this.acno
  //   var pswd = this.pswd
  //   let userDetails = this.userDetails
  //   if (acno in userDetails) {
  //     if (pswd == userDetails[acno]['password']) {
  //       alert("Login successfully")
  //     }
  //     else {
  //       alert("Incorrect password")
  //     }
  //   }
  //   else {
  //     alert("User doesn't exist")
  //   }
  // }

  //login with 2 argument
  login(a: any, p: any) {
    //console.log(a);


    var acno = a.val
    var pswd = p.val
    let userDetails = this.userDetails
    if (acno in userDetails) {
      if (pswd == userDetails[acno]['password']) {
        alert("Login successfully")
      }
      else {
        alert("Incorrect password")
      }
    }
    else {
      alert("User doesn't exist")
    }
  }

}
