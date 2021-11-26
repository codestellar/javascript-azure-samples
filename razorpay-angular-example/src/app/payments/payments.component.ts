import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

declare var Razorpay: any;

@Component({
  selector: 'app-payments',
  templateUrl: './payments.component.html',
  styleUrls: ['./payments.component.css']
})
export class PaymentsComponent implements OnInit {
  RazorPay: any;
  razorPayOptions = {
    // Add Razorpay Key here
    'key': '',
    'amount': '30000',
    'currency': 'INR',
    'name': 'Karisma Diet Center',
    'description': 'test payment',
    'order_id': '',
    "image": "https://mis.karismadiet.com/assets/frontend/css/img/logo.png",
    'handler': (res: any) => {
        console.log('Transaction Success');
        console.log(res);

        // Report to Server API
    },
    "prefill": {
      // Get Name from Token
      "name": "Jasmine",
      "email": "jasmine@mailinator.com",
      "contact": "+919569680377"
    }
  };

  //paymentForm: FormGroup;

  constructor(private fb: FormBuilder, ) { 
    this.createForm();
  }

  ngOnInit(): void {
    
  }

  createForm(){
    // this.paymentForm = this.fb.group({
    //   name: ['Jasmine'],
    //   amount: ['30000'],
    //   email:['jasmine@mailinator.com'] 
    // })
  }

  payNow(){
    let rzp = new Razorpay(this.razorPayOptions);
    rzp.on('payment.failed', this.callTransactionFailedApi())
    rzp.open();
  }

  callTransactionFailedApi(){
    console.log('Transaction Failed');

    // Report to Server API
  }


}
