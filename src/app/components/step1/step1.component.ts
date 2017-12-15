import { Component, OnInit } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { VerifyComponent } from '../verify/verify.component';
import { ConfirmedComponent } from '../confirmed/confirmed.component';
import { RegistrationService } from '../../services/registration.service';
import { Registration } from '../../models/registration';
import { FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.css']
})
export class Step1Component implements OnInit {

  public data:Registration;
  public roles:String[];
  public emailPattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  public phonePattern=/^\(?(\d{3})\)?[ .-]?(\d{3})[ .-]?(\d{4})$/;
  
  constructor(private _modalService: NgbModal, private _registrationService:RegistrationService) { }

  ngOnInit() {
    this.data = new Registration();
    this.roles =["Caregiver", "Doctor", "Nurse", "Podiatrist", "Therapist","Phlobotomist","Other"];
  }

  submit(){
    if ( this._registrationService.submit(this.data))
    {
      this._modalService.open(VerifyComponent).result.then((result) => {
        console.log(result);
        if(result == "confirmed")
        {        
          this._modalService.open(ConfirmedComponent);
        }
      }, (reason) => {});
    }
  }
}
