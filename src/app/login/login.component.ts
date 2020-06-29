import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service.js'


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

	user:any = { uname:'', password:''};
	error:string='';
	credential:any;
 	constructor(loginService: LoginService) { 
		loginService.getCredential().subscribe((data:any) => this.credential = data);
 	}

 
  ngOnInit(): void {
  			
  }
  handleLogin() {
   if(this.user.uname!==this.credential.username || this.user.password!==this.credential.password){
   this.error='Invalid Credentials'
   }else{
   window.location.href='/home';
   this.error='';
   }
   
  }
}
