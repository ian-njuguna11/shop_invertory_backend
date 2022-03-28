package com.shop_inventory.ayan.controllers.Auth.registration;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;



@CrossOrigin(origins = "http://localhost:3000/")
@RestController
@AllArgsConstructor
@RequestMapping(path = "api/v1/auth")
public class RegistrationController {

    private RegistrationService registrationService;

    @PostMapping
    public String register(@RequestBody RegistrationRequest request){
        return registrationService.register(request);
    }

    @GetMapping(path = "confirm")
    public String confirm(@RequestParam("token") String token) {
        return registrationService.confirmToken(token);
    }



}
