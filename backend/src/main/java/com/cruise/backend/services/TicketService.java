package com.cruise.backend.services;

import com.cruise.backend.models.Ticket;
import com.cruise.backend.repositories.TicketRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepo ticketRepo;

    public Ticket add(Ticket ticket){
        return ticketRepo.save(ticket);
    }





}
