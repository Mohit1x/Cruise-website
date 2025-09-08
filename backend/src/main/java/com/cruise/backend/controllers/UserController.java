package com.cruise.backend.controllers;

import com.cruise.backend.exceptions.GlobalExceptionHandler;
import com.cruise.backend.models.User;
import com.cruise.backend.services.UserService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/api/users")
public class UserController {

    private final UserService userServ;
    private final GlobalExceptionHandler handler;

    @GetMapping(value = "/all")
    public ResponseEntity<Object> getAll() {
        List<User> users = userServ.getAll();
        Map<String,Object> data = new HashMap<>();
        data.put("users",users);
        log.info("✔ Retrieve all Users Successfully");
        return handler.buildResponse("Retrieve all Users Successfully",data,HttpStatus.OK);
    }

    @GetMapping(value = "/id/{id}")
    public ResponseEntity<Object> getById(@PathVariable String id) {
        User user = userServ.getById(id);
        Map<String,Object> data = new HashMap<>();
        data.put("user",user);
        log.info("✔ Retrieve User By ID Successfully");
        return handler.buildResponse("Retrieve User By ID Successfully",data,HttpStatus.OK);
    }

    @GetMapping(value = "/email/{email}")
    public ResponseEntity<Object> getByEmail(@PathVariable String email) {
        User user = userServ.getByEmail(email);
        Map<String,Object> data = new HashMap<>();
        data.put("user",user);
        log.info("✔ Retrieve User By Email Successfully");
        return handler.buildResponse("Retrieve User By Email Successfully",data,HttpStatus.OK);
    }

    @PostMapping(value = "/update")
    public ResponseEntity<Object> update(@RequestBody User user){
        User updatedUser = userServ.update(user);
        Map<String,Object> data = new HashMap<>();
        data.put("updatedUser",updatedUser);
        log.info("✔ Updated User Successfully");
        return handler.buildResponse("Updated User Successfully",data,HttpStatus.OK);
    }

    @PostMapping(value = "/delete/{id}")
    public ResponseEntity<Object> delete(@PathVariable String id){
        String mssg = userServ.delete(id);
        log.info("✔ Deleted User Successfully");
        return handler.buildResponse(mssg,null,HttpStatus.OK);
    }

}
