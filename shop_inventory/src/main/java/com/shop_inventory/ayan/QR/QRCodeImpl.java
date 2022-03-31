package com.shop_inventory.ayan.QR;

import com.google.zxing.WriterException;
import org.springframework.stereotype.Service;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.io.IOException;
import java.util.Base64;

@Service
public class QRCodeImpl implements QRCode{


    @Override
    public void QRCodeGenerator(QRCodeRequest qrCodeRequest) {
        String QR_CODE_IMAGE_PATH = "./src/main/resources/static/img/"+qrCodeRequest.getProductName()+"QRCode.png" ;

//        String productName = "Mechele";

        byte[] image = new byte[0];
        try {

            // Generate and Return Qr Code in Byte Array
//            image = QRCodeGenerator.getQRCodeImage(qrCodeRequest.getProductName(),250,250);

            // Generate and Save Qr Code Image in static/image folder
            QRCodeGenerator.generateQRCodeImage(qrCodeRequest.getProductName(),250,250,QR_CODE_IMAGE_PATH);

        } catch (WriterException | IOException e) {
            e.printStackTrace();
        }

        // Convert Byte Array into Base64 Encode String
        String qrcode = Base64.getEncoder().encodeToString(image);

//        model.addAttribute("medium", qrCodeRequest.getProductName());
//        model.addAttribute("qrcode",qrCodeRequest.getProductName());
    }

}
