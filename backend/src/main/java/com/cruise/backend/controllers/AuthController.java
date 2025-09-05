package com.cruise.backend.controllers;

import com.cruise.backend.dtos.JwtRequest;
import com.cruise.backend.dtos.JwtResponse;
import com.cruise.backend.exceptions.InvalidCredentialsException;
import com.cruise.backend.helper.ResponseBuilder;
import com.cruise.backend.models.User;
import com.cruise.backend.security.JwtHelper;
import com.cruise.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/api/auth")
public class AuthController {

    private final UserService userServ;
    private final ResponseBuilder responseBuilder;
    private final AuthenticationManager authManager;
    private final JwtHelper helper;


    @PostMapping(value = "/register")
    public ResponseEntity<Object> register(@RequestBody User user) {
        User savedUser = userServ.register(user);
        Map<String, Object> data = new HashMap<>();
        data.put("user", savedUser);
        log.info("User added Successfully");
        return responseBuilder.buildResponse("User registered successfully", data, HttpStatus.CREATED);
    }

    @PostMapping(value = "/login")
    public ResponseEntity<Object> login(@RequestBody JwtRequest request) {
        this.doAuthenticate(request.getEmail(), request.getPassword());
        User userDetails = (User) userServ.loadUserByUsername(request.getEmail());
        String token = userServ.checkAndRenewToken(userDetails);
        JwtResponse response = JwtResponse.builder()
                .jwtToken(token)
                .name(userDetails.getUsername())
                .role(String.valueOf(userDetails.getRole()))
                .build();
        return new ResponseEntity<>(response, HttpStatus.OK);

    }

    private void doAuthenticate(String email, String password) {
        UsernamePasswordAuthenticationToken authentication = new UsernamePasswordAuthenticationToken(email, password);
        try {
            authManager.authenticate(authentication);
        } catch (InvalidCredentialsException e) {
            throw new InvalidCredentialsException("Invalid email or password...");
        }
    }


}
