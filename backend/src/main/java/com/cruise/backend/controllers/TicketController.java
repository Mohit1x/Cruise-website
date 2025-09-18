package com.cruise.backend.controllers;

import com.cruise.backend.models.Ticket;
import com.cruise.backend.models.User;
import com.cruise.backend.services.TicketService;
import com.cruise.backend.services.UserService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.HashMap;
import java.util.Map;

@Slf4j
@RequiredArgsConstructor
@RestController
@RequestMapping(value = "/v1/api/tickets")
public class TicketController {

    private final UserService userServ;
    private final TicketService ticketServ;
    private final UserDetailsService userDetailsServ;

    @PostMapping(value = "/generate")
    public ResponseEntity<Object> generate(@RequestBody @Valid Ticket ticket, Principal principal){
        User currentUser = (User) userDetailsServ.loadUserByUsername(principal.getName());
        Ticket generatedTicket = ticketServ.add(ticket,currentUser);
        Map<String, Object> data = new HashMap<>();
        data.put("ticket", generatedTicket);
        data.put("message","Ticket generated successfully");
        log.info("✔ Ticket generated successfully");
        return new ResponseEntity<>(data, HttpStatus.CREATED);
    }

}
