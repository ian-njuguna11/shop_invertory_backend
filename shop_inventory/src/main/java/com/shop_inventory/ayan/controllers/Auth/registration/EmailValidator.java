package com.shop_inventory.ayan.controllers.Auth.registration;

import org.springframework.stereotype.Service;

import java.util.function.Predicate;

@Service
public class EmailValidator implements Predicate<String> {
    @Override
    public boolean test(String s) {
        //TODO:REGEX to validate
        return true;
    }
}
