package com.shop_inventory.ayan.controllers;

import com.shop_inventory.ayan.model.AnnualChart;
import com.shop_inventory.ayan.model.Product;
import com.shop_inventory.ayan.repository.AnnualChartRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/")
@AllArgsConstructor
public class ChartsController {

    @Autowired
    private final AnnualChartRepository annualChartRepository;

    @PostMapping("/first_quarter")
    public AnnualChart createProduct(@RequestBody AnnualChart annualChart){
        annualChartRepository.deleteAll();
        return annualChartRepository.save(annualChart);
    }

    @GetMapping("annual_report")
    public List<AnnualChart> getAnnualReport(){
        return annualChartRepository.findAll();
    }

}
