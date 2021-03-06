import { Component, ViewChild } from '@angular/core';
import { NgForm } from "@angular/forms";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('subscriptionForm') subscriptionForm: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  defaultSubscriptionType = 'Advanced';
  subscriptionObj = {
    email: '',
    subscription: '',
    password: ''
  };
  submittedForm = false;

  onSubmit() {
    console.log(this.subscriptionForm.value);
    this.submittedForm = true;
    this.subscriptionObj.email = this.subscriptionForm.value.email;
    this.subscriptionObj.subscription = this.subscriptionForm.value.subscription;
    this.subscriptionObj.password = this.subscriptionForm.value.password;
  }
}
