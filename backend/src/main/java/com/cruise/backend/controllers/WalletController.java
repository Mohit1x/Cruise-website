package com.cruise.backend.controllers;

import com.cruise.backend.dtos.Transaction;
import com.cruise.backend.helper.ResponseBuilder;
import com.cruise.backend.models.User;
import com.cruise.backend.models.Wallet;
import com.cruise.backend.services.WalletService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/api/wallets")
public class WalletController {

    private final UserDetailsService userDetailsServ;
    private final WalletService walletServ;
    private final ResponseBuilder handler;

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody @Valid Wallet wallet){
        Wallet created = walletServ.add(wallet);
        Map<String,Object> data = new HashMap<>();
        data.put("wallet",created);
        log.info("✔ Created User Wallet Successfully");
        return handler.buildResponse("Created User Wallet Successfully",data, HttpStatus.CREATED);
    }

    @PostMapping(value = "/transaction")
    public ResponseEntity<Object> transaction(@RequestBody Transaction transaction, Principal principal){
        User currentUser = (User) userDetailsServ.loadUserByUsername(principal.getName());
        walletServ.processTransaction(transaction, currentUser.getId());
        log.info("✔ Wallet Transaction Successful");
        return handler.buildResponse("Wallet Transaction Successful",null, HttpStatus.OK);
    }


}
