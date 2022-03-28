package com.shop_inventory.ayan.controllers.Auth.login;


import com.shop_inventory.ayan.model.User;
import com.shop_inventory.ayan.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;


@RestController
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping(path = "api/v1/login")
public class LoginController {

    private UserRepository userRepository;

    @PostMapping
    public Optional<User> authenticateUser(@RequestBody User user){
        Optional<User> oldUser = userRepository.findByEmail(user.getEmail());
        return oldUser;

//        if (oldUser == null){
//            throw new UsernameNotFoundException("invalid credentials");
//        }else if(oldUser.getPassword() == user.getPassword()){
//            return user;
//        }else {
//            throw new UsernameNotFoundException("invalid credentials");
//        }

    }

}
