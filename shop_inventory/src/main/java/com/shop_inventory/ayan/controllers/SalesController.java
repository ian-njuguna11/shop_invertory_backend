package com.shop_inventory.ayan.controllers;

import com.shop_inventory.ayan.model.Sales;
import com.shop_inventory.ayan.repository.SalesRepository;
import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/")
@AllArgsConstructor
public class SalesController {

    private final SalesRepository salesRepository;

    @GetMapping("all_sales")
    public List<Sales> getSales(){
        return salesRepository.findAll();
    }


}
