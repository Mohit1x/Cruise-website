package com.cruise.backend.services;

import com.cruise.backend.exceptions.NotFoundException;
import com.cruise.backend.models.MembershipLevel;
import com.cruise.backend.repositories.MembershipRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;
import java.util.List;

@Service
@RequiredArgsConstructor
public class MembershipService {
    private final MembershipRepo membershipRepo;

    public MembershipLevel add(MembershipLevel membership){
        return membershipRepo.save(membership);
    }

    public MembershipLevel findByName(String name){
        return membershipRepo.findByName(name)
                .orElseThrow(() -> new NotFoundException("Invalid Membership Name"));
    }

    public MembershipLevel findById(String id){
        return membershipRepo.findById(id)
                .orElseThrow(() -> new NotFoundException("Membership not Found by ID : "+id));
    }

    public List<MembershipLevel> findAll() {
        List<MembershipLevel> memberships = membershipRepo.findAll();

        if (memberships.isEmpty()) {
            MembershipLevel defaultMembership = MembershipLevel.builder()
                    .name("VIP0")
                    .commission(BigDecimal.valueOf(1.2))
                    .minimumBalance(BigDecimal.valueOf(5000))
                    .invitePermission("allowed")
                    .minimumWithdrawal(BigDecimal.valueOf(2000))
                    .maximumWithdrawal(BigDecimal.valueOf(5000))
                    .build();

            membershipRepo.save(defaultMembership);
            memberships = membershipRepo.findAll();
        }

        return memberships;
    }


    public String delete(String id) {
        MembershipLevel existingMembership = this.findById(id);
        existingMembership.setIsDeleted(true);
        membershipRepo.save(existingMembership);
        return "Deleted Membership by ID : " + id;
    }





}
