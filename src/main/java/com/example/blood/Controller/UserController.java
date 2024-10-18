package com.example.blood.Controller;

import com.example.blood.Service.EmailService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private EmailService emailService;

    @PostMapping("/send-email")
    public void sendWelcomeEmail(@RequestBody EmailRequest emailRequest) {
        String to = emailRequest.getEmail();
        String subject = "Welcome to Bloody-sweet";
        String text = "Thank you for signing up!";
        emailService.sendEmail(to, subject, text);
    }
}

class EmailRequest {
    private String email;

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
}

