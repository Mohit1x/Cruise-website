package com.cruise.backend.repositories;

import com.cruise.backend.models.Ticket;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TicketRepo extends BaseRepo<Ticket,String>{

}
