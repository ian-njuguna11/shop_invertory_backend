package com.shop_inventory.ayan.BootStrap;

import com.shop_inventory.ayan.model.User;
import com.shop_inventory.ayan.model.UserRole;
import com.shop_inventory.ayan.repository.UserRepository;
import lombok.AllArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;


@Component
@AllArgsConstructor
public class userSeeders implements CommandLineRunner {

    private final UserRepository userRepository;

    @Override
    public void run(String... args) throws Exception {
       User user = new User();
       user .setFirstName("Ian");
       user.setLastName("NJ");
       user.setPassword("password");
       user.setEmail("Ian@mail.com");
       user.setUserRole(UserRole.ADMIN);

       userRepository.save(user);

    }
}
