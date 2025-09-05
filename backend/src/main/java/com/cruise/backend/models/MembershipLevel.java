package com.cruise.backend.models;


import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;

import java.math.BigDecimal;
import java.util.UUID;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "membership_levels")
public class MembershipLevel {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", nullable = false, updatable = false, length = 36)
    private String id;

    @Column(unique = true, nullable = false)
    private String name; // e.g., "VIP0", "VIP1"

    @Column(nullable = false, precision = 10, scale = 4)
    private BigDecimal commission;

    @Column(name = "minimum_balance", nullable = false, precision = 15, scale = 2)
    private BigDecimal minimumBalance;

    @Column(name = "invite_permission", nullable = false)
    private String invitePermission; // Can be "allow" or "not allowed"

    @Column(name = "minimum_withdrawal", nullable = false, precision = 15, scale = 2)
    private BigDecimal minimumWithdrawal;

    @Column(name = "maximum_withdrawal", nullable = false, precision = 15, scale = 2)
    private BigDecimal maximumWithdrawal;

}
