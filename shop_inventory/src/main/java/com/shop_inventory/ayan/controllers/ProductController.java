package com.shop_inventory.ayan.controllers;

import com.shop_inventory.ayan.QR.QRCodeImpl;
import com.shop_inventory.ayan.QR.QRCodeRequest;
import com.shop_inventory.ayan.exceptions.ResourceNotFoundException;
import com.shop_inventory.ayan.model.Product;
import com.shop_inventory.ayan.model.Sales;
import com.shop_inventory.ayan.repository.ProductRepository;
import com.shop_inventory.ayan.repository.SalesRepository;
import com.shop_inventory.ayan.sms.SmsRequest;
import com.shop_inventory.ayan.sms.TwilioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000/")
@RequestMapping("/api/v1/")
public class ProductController {

    private TwilioService twilioService;
    private SmsRequest smsRequest;
    private final QRCodeImpl qrCodeImpl;
    private final SalesRepository salesRepository;

    @Autowired
    public ProductController(TwilioService twilioService, QRCodeImpl qrCodeImpl, SalesRepository salesRepository) {
        this.twilioService = twilioService;
        this.qrCodeImpl = qrCodeImpl;
        this.salesRepository = salesRepository;
    }

    @Autowired
    private ProductRepository productRepository;

    @GetMapping("/products")
    public List<Product> getProduct(){
        return productRepository.findAll();
    }

    @PostMapping("/products")
    public Product createProduct(@RequestBody Product product){

        QRCodeRequest qrCodeRequest = new QRCodeRequest(product.getName(), product.getId());

        qrCodeImpl.QRCodeGenerator(qrCodeRequest);

        return productRepository.save(product);
    }

    // get employee by id rest api
    @GetMapping("/products/{id}")
    public ResponseEntity<Product> getEmployeeById(@PathVariable Long id) {
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));
        return ResponseEntity.ok(product);
    }

    @PutMapping("/products/{id}")
    public ResponseEntity<Product> updateProduct(@PathVariable Long id, @RequestBody Product productDetails){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not exist with id :" + id));

        product.setName(productDetails.getName());
        product.setImage_url(productDetails.getImage_url());
        product.setPrice(productDetails.getPrice());
        product.setQuantity(productDetails.getQuantity());
        product.setDescription(productDetails.getDescription());

        Product updatedProduct = productRepository.save(product);
        return ResponseEntity.ok(updatedProduct);
    }

    // delete employee rest api
    @DeleteMapping("/products/{id}")
    public ResponseEntity<Map<String, Boolean>> deleteProduct(@PathVariable Long id){
        Product product = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee not exist with id :" + id));

        productRepository.delete(product);
        Map<String, Boolean> response = new HashMap<>();
        response.put("deleted", Boolean.TRUE);
        return ResponseEntity.ok(response);
    }

    @PostMapping("/makeSale/{id}")
    public ResponseEntity<Product> makeSale(@PathVariable Long id,  @RequestBody Product product){
        Product makeSale = productRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Product not found with id: " + id));

        double oldQuantity = makeSale.getQuantity();

        oldQuantity = oldQuantity - product.getQuantity();

        makeSale.setQuantity(oldQuantity);

        Product madeSale = productRepository.save(makeSale);

        var price = (product.getQuantity() * makeSale.getPrice());

        registerSale(makeSale.getName(), product.getQuantity(), price);

        String msg;

        if (oldQuantity != 0){
            String message = String.format( makeSale.getName() + " is almost out of stoke please restock the product\nIt has remaining quantity of "+ oldQuantity + "\n\nREGARDS RETAILS SHOP INVENTORY ");
            msg = message;
        }else {
            String message = String.format( makeSale.getName() + " is out of stoke please restock the product\nIt has remaining quantity of "+ oldQuantity + "\n\nREGARDS RETAILS SHOP INVENTORY ");
            msg = message;
        }

        SmsRequest smsRequest = new SmsRequest("+254724838482",msg);

        // TODO: 3/30/2022 if product is less than 2 in quantity then send sms to remind owner to restock
        if (oldQuantity<2){
            sendSms(smsRequest);
        }

        return ResponseEntity.ok(madeSale);
    }

    public void registerSale(String productName, double quantity, double price){
        Sales sale = new Sales(productName,quantity,price);
        salesRepository.save(sale);
    }


    public void sendSms(SmsRequest smsRequest){
        twilioService.sendSms(smsRequest);
    }
}
