import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { Step1Component } from './components/step1/step1.component';

import { routing } from "./app.routing";

import { RegistrationService } from './services/registration.service';
import { VerifyComponent } from './components/verify/verify.component';
import { ConfirmedComponent } from './components/confirmed/confirmed.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    VerifyComponent,
    ConfirmedComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    routing
  ],
  providers: [RegistrationService],
  bootstrap: [AppComponent],
  entryComponents:[VerifyComponent,ConfirmedComponent]
})
export class AppModule { }
