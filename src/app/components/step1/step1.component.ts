import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  public role:String;
  public firstname:String;
  public lastname:String;
  public email:String;
  public cellphone:String;
  
  constructor() { }

  ngOnInit() {
  }

  submit(){

  }
}
