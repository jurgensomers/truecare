import { Component, OnInit } from '@angular/core';
import { NgbModal, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { RegistrationService } from '../../services/registration.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styleUrls: ['./verify.component.css']
})
export class VerifyComponent implements OnInit {

  public code:String;
  public phoneNumber:String;

  constructor(private _registrationService : RegistrationService, public activeModal: NgbActiveModal) { }

  ngOnInit() {
    this.phoneNumber = this._registrationService.phoneNumber;
  }


  confirm(){
    if ( this._registrationService.verify(this.code))
    {
      this.activeModal.close('confirmed');
    }
  }

  resend(){
    this._registrationService.resend(this.phoneNumber);
  }

}
