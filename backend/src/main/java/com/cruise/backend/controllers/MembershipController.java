package com.cruise.backend.controllers;

import com.cruise.backend.helper.ResponseBuilder;
import com.cruise.backend.models.MembershipLevel;
import com.cruise.backend.services.MembershipService;
import jakarta.validation.Valid;
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
@RequestMapping(value = "/v1/api/memberships")
public class MembershipController {
    private final ResponseBuilder handler;
    private final MembershipService membershipServ;

    @PostMapping(value = "/create")
    public ResponseEntity<Object> create(@RequestBody @Valid MembershipLevel membership) {
        MembershipLevel createdMembership = membershipServ.add(membership);
        Map<String, Object> data = new HashMap<>();
        data.put("membership",createdMembership);
        log.info("✔ Created Membership level Successfully");
        return handler.buildResponse("Created Membership level Successfully", data, HttpStatus.CREATED);
    }

    @GetMapping(value = "/all")
    public ResponseEntity<Object> findAll(){
        List<MembershipLevel> memberships = membershipServ.findAll();
        Map<String, Object> data = new HashMap<>();
        data.put("memberships",memberships);
        log.info("✔ Retrieved All Membership level");
        return handler.buildResponse("Retrieved All Membership level", data, HttpStatus.OK);
    }

    @GetMapping(value = "/find/{id}")
    public ResponseEntity<Object> findById(@PathVariable String id){
        MembershipLevel membership = membershipServ.findById(id);
        Map<String, Object> data = new HashMap<>();
        data.put("membership",membership);
        log.info("✔ Retrieved Membership level by ID : {}",id);
        return handler.buildResponse("Retrieved Membership level by ID : "+id, data, HttpStatus.FOUND);
    }

    @GetMapping(value = "/find/{name}")
    public ResponseEntity<Object> findByName(@PathVariable String name){
        MembershipLevel membership = membershipServ.findByName(name);
        Map<String, Object> data = new HashMap<>();
        data.put("membership",membership);
        log.info("✔ Retrieved Membership level");
        return handler.buildResponse("Retrieved Membership level", data, HttpStatus.FOUND);
    }

    @PostMapping(value = "/archive/{id}")
    public ResponseEntity<Object> archive(@PathVariable String id){
        membershipServ.delete(id);
        log.info("✔ Archived Membership level");
        return handler.buildResponse("Archived Membership level", null, HttpStatus.OK);
    }
}
