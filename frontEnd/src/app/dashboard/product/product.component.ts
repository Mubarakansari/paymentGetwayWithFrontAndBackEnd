import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
declare var Razorpay: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  form: FormGroup;
  submitted = false;

  constructor(
    public fb: FormBuilder,
    private router: Router,
    private http: HttpClient,
  ) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      amount: ['', [Validators.required]]
    })
  }

save() {
  this.form.value.currencyType = "INR";
  this.submitted = true;

  this.http.post<any>(environment.hostUrl + "paymentGetway/createPaymentOrder", this.form.value).subscribe(res => {
  let options = {
      "key": "rzp_test_CzgzpmthpmpuSe", 
      "amount": res.amount,
      "currency":res.currency,
      "name": "Mubarak Ansari",
      "description": "Test Transaction",
      "order_id": res.id,
      "handler": function (response) {
        console.log("handler>>", response);
          // alert(response.razorpay_payment_id);
          // alert(response.razorpay_order_id);
          // alert(response.razorpay_signature)
          if(response.razorpay_payment_id) {
            console.log("Payment success");
          } else {
            console.log("Payment Failure");
          }
      },
      "prefill": {
          "name": "Mubarak ali",
          "email": "mubarakalia87@gmail.com",
          "contact": "9173302557"
      },
      "notes": {
          "address": "Razorpay Corporate Office"
      },
  };
  let rzp = new Razorpay(options);
  rzp.on('payment.failed', function (response) {
    console.log("payment.failed>>"+ response);
    console.log("payment.failed>>"+ JSON.stringify(response.error));
          // alert(response.error.code);
          // alert(response.error.description);
          // alert(response.error.source);
          // alert(response.error.step);
          // alert(response.error.reason);
          // alert(response.error.metadata.order_id);
          // alert(response.error.metadata.payment_id);
  });
  rzp.open();
 
  }, err => {
    console.log("Error>>", err);
    alert(err);
  });
}

  get signInFormController() {
    return this.form.controls;
  }
}
