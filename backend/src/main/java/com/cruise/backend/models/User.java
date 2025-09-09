package com.cruise.backend.models;

import com.cruise.backend.constants.UsageStatus;
import com.cruise.backend.constants.UserRole;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.Size;
import lombok.*;
import org.hibernate.annotations.UuidGenerator;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.UUID;

@Entity
@Builder
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Table(name = "users")
public class User extends Auditable implements UserDetails {

    @Id
    @GeneratedValue
    @UuidGenerator
    @Column(name = "id", nullable = false, updatable = false, length = 36)
    private String id;

    @Column(name = "token",unique = true)
    private String token;

    @NotBlank
    @Size(max = 30)
    @Column(name = "user_name",nullable = false,length = 30)
    private String userName;

    @Email
    @NotBlank
    @Size(max = 50)
    @Column(name = "email", nullable = false, unique = true, length = 50)
    private String email;

    @NotBlank
    @Column(name = "password", nullable = false)
    private String password;

    @Enumerated(EnumType.STRING)
    @Column(name = "role", nullable = false, length = 10)
    private UserRole role;

    @NotBlank
    @Column(name = "invitation_code", unique = true)
    private String invitationCode;

    @Column(name = "number_of_logins", nullable = false)
    private Integer numberOfLogins;

    @Enumerated(EnumType.STRING)
    @Column(name = "usage_status", nullable = false)
    private UsageStatus usageStatus;

    @OneToOne(mappedBy = "user",cascade = CascadeType.ALL)
    @JsonManagedReference
    private BankDetails bankDetails;

//    @Transient
    @ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "membership_level_id", nullable = false)
    private MembershipLevel membershipLevel;

    @OneToMany(cascade = CascadeType.ALL,fetch = FetchType.EAGER)
    @JoinColumn(name = "user_id",referencedColumnName = "id")
    private List<Ticket> tickets = new ArrayList<>();

    @Override
    public Collection<? extends GrantedAuthority> getAuthorities() {
        return List.of(new SimpleGrantedAuthority(role.name()));
    }

    @Override
    public String getUsername() {
        return this.email;
    }

    private String generateInvitationCode() {
        return UUID.randomUUID().toString()
                .replace("-", "")
                .substring(0, 6)   // 6 characters like 2BMY5P
                .toUpperCase();
    }

    @PrePersist
    private void prePersist(){
        if(this.id == null){
            this.id = UUID.randomUUID().toString();
        }
        this.invitationCode = generateInvitationCode();
    }
}
