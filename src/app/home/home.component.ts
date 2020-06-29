import { Component, OnInit } from '@angular/core';
import { HomeService } from '../home.service.js';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  users:any;
  formdisplay:boolean=false;
  constructor(homeService:HomeService) {
  this.users=JSON.parse(window.localStorage.user);
  if(this.users===undefined){
   homeService.getUsers().subscribe((data:any) => this.users = data.results);
  }
 

  }

  ngOnInit(): void {
  }
 
 addNewUser(){
 window.localStorage.user=JSON.stringify(this.users);
 this.formdisplay=true;
 }
}
