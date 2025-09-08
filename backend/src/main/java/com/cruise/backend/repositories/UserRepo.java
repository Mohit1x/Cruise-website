package com.cruise.backend.repositories;

import com.cruise.backend.models.User;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepo extends BaseRepo<User,String> {

    Optional<User> findByEmail(String email);

    Optional<User> findByInvitationCode(String invitationCode);
}
