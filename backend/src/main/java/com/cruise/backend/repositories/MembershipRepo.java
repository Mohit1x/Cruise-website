package com.cruise.backend.repositories;

import com.cruise.backend.models.MembershipLevel;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface MembershipRepo extends BaseRepo<MembershipLevel,String> {

    Optional<MembershipLevel> findByName(String name);


}
