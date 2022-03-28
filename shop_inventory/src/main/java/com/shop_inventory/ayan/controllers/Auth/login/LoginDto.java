package com.shop_inventory.ayan.controllers.Auth.login;

import lombok.Data;

@Data
public class LoginDto {
    private String usernameOrEmail;
    private String password;
}