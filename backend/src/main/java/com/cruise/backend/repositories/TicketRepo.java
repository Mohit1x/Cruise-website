package com.cruise.backend.repositories;

import com.cruise.backend.models.Ticket;
import org.springframework.stereotype.Repository;

@Repository
public interface TicketRepo extends BaseRepo<Ticket,String>{

}
