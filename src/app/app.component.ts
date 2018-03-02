import { Component, ViewChild } from '@angular/core';
import { NgForm, NgModelGroup } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') subscriptionForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscriptionType = 'Advanced';
  subscriptionObj = {
    email: '',
    password: '',
    subscription: ''
  };
  submittedForm = false;

  onSubmit(form: NgForm) {
    console.log(this.subscriptionForm);
    this.submittedForm = true;
    this.subscriptionObj.email = this.subscriptionForm.value.email;
    this.subscriptionObj.password = this.subscriptionForm.value.password;
    this.subscriptionObj.subscription = this.subscriptionForm.value.subscription;
  }
}
