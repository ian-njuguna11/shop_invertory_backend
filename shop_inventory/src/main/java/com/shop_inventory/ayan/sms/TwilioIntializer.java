package com.shop_inventory.ayan.sms;

import com.twilio.Twilio;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Configuration;

@Configuration
public class TwilioIntializer {

    private final static Logger LOGGER = LoggerFactory.getLogger(TwilioIntializer.class);

    private final TwilioConfiguration twilioConfiguration;

    @Autowired
    public TwilioIntializer(TwilioConfiguration twilioConfiguration) {
        this.twilioConfiguration = twilioConfiguration;
        Twilio.init(
                twilioConfiguration.getAccountSID(),
                twilioConfiguration.getAuthToken()
        );
        LOGGER.info("Twilio initialized ... with accountSID {} ", twilioConfiguration.getAccountSID());
    }



}
