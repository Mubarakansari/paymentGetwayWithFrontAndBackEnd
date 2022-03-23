package com.razorpay.controller;

import com.razorpay.Order;
import com.razorpay.RazorpayClient;
import com.razorpay.dto.PaymentRequest;
import lombok.extern.slf4j.Slf4j;
import org.json.JSONObject;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@CrossOrigin
@RestController
@Slf4j
@RequestMapping(value = "/paymentGetway/")
public class PaymentGetway {

    @PostMapping(value = "createPaymentOrder")
    public ResponseEntity<?> createPaymentOrder(@RequestBody PaymentRequest paymentRequest) {
        log.info("Inside createPaymentOrder");
        Order order = null;
        try {
            RazorpayClient razorpayClient = new RazorpayClient("rzp_test_CzgzpmthpmpuSe", "PeniYLwqKBbe3gNl6j7mTOfi");
            JSONObject options = new JSONObject();
            options.put("amount", paymentRequest.getAmount() * 100);
            options.put("currency", paymentRequest.getCurrencyType());
            options.put("receipt", UUID.randomUUID().toString());
            order = razorpayClient.Orders.create(options);
        } catch (Exception e) {
            e.printStackTrace();
        }
//        log.info("order>> {}", order.toString());
        return ResponseEntity.status(HttpStatus.OK).body(order.toString());
    }
}
