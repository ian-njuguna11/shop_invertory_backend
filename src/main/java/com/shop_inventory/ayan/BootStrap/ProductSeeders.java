package com.shop_inventory.ayan.BootStrap;

import com.shop_inventory.ayan.model.Product;
import com.shop_inventory.ayan.repository.ProductRepository;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

@Component
public class ProductSeeders implements CommandLineRunner {

    private final ProductRepository productRepository;

    public ProductSeeders(ProductRepository productRepository) {
        this.productRepository = productRepository;
    }


    @Override
    public void run(String... args) {

        Product product = new Product();
        product.setName("Cooking Oil");
        product.setDescription("Mtungi Raha Cooking Oil");
        product.setQuantity(20);
        product.setPrice(300);
        product.setImage_url("https://imgs.search.brave.com/CW-E-6fS4b-LL9cUyFn347RBNYyVGF8HAmUoSVbxSDE/rs:fit:228:225:1/g:ce/aHR0cHM6Ly90c2Uy/Lm1tLmJpbmcubmV0/L3RoP2lkPU9JUC5T/ZVh1OHFFS0tMYUdZ/bEZhYjNubnpnQUFB/QSZwaWQ9QXBp");

        productRepository.save(product);

    }
}
