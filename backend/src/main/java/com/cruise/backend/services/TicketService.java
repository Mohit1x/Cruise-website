package com.cruise.backend.services;

import com.cruise.backend.models.Ticket;
import com.cruise.backend.models.User;
import com.cruise.backend.repositories.TicketRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class TicketService {

    private final TicketRepo ticketRepo;

    public Ticket add(Ticket ticket, User currentUser) {
        List<Ticket> userTickets = currentUser.getTickets();
        userTickets.add(ticket);
        currentUser.setTicketCount(currentUser.getTicketCount() + 1);
        return ticketRepo.save(ticket);
    }

    public List<Ticket> getAll(){
        return ticketRepo.findByIsDeletedFalse();
    }

}
