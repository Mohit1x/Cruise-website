package com.cruise.backend.repositories;

import com.cruise.backend.models.Ticket;
import com.cruise.backend.models.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface UserRepo extends BaseRepo<User,String> {

    Optional<User> findByEmail(String email);

    Optional<User> findByInvitationCode(String invitationCode);

    @Query("SELECT t FROM User u JOIN u.tickets t WHERE u.id = :userId AND t.isDeleted = false")
    List<Ticket> findTicketsByUserId(@Param("userId") String userId);
}
