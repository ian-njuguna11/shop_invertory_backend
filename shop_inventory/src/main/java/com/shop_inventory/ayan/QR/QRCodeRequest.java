package com.shop_inventory.ayan.QR;

import com.fasterxml.jackson.annotation.JsonProperty;

public class QRCodeRequest {
    private final Long id;
    private final String productName;

    public QRCodeRequest(@JsonProperty("productName") String productName,@JsonProperty("id") Long id) {
        this.productName = productName;
        this.id = id;
    }

    public String getId() {
        return String.valueOf(id);
    }

    public String getProductName() {
        return productName;
    }

    @Override
    public String toString() {
        return "QRCodeRequest{" +
                "productName='" + productName + '\'' +
                ", id=" + id +
                '}';
    }
}
