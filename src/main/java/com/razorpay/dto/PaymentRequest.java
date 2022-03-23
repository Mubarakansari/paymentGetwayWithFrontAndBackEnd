package com.razorpay.dto;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class PaymentRequest {
    private double amount;
    private String currencyType;
}


