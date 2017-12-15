import { Injectable } from '@angular/core';
import { Registration } from '../models/registration';
@Injectable()
export class RegistrationService {

  public phoneNumber:String;

  constructor() { }

  submit(data:Registration){
    this.phoneNumber = data.cellphone;
    return true;
  }

  
  verify(code:String){
    return true;
  }

  resend(phoneNumber:String)
  {
    
  }
}
