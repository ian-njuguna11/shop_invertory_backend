package com.shop_inventory.ayan.QR;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("api/v1/QRCode")
public class QRCodeController {

    private final QRCodeImpl qrCodeImpl;

    @Autowired
    public QRCodeController(QRCodeImpl qrCodeImpl) {
        this.qrCodeImpl = qrCodeImpl;
    }

    @PostMapping
    public void QRCodeGenerate(@RequestBody QRCodeRequest qrCodeRequest){
        qrCodeImpl.QRCodeGenerator(qrCodeRequest);
    }

}
