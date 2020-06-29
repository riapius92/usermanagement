import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor() { }
  user:any={
		    "gender": "",
		    "name": {
		    "title": "",
		     "first": "",
		      "last": ""
		       },
                "email": "",
                "username": "",
                "password": "", "dob":null ,
                "phone": ""
  };
  ngOnInit(): void {
  }

  addUser(){
  let users=JSON.parse(window.localStorage.user);
  users.push(this.user);
  window.localStorage.user=JSON.stringify(users);
  window.location.href="/home"
  }

}
