package com.cruise.backend.services;

import com.cruise.backend.constants.UsageStatus;
import com.cruise.backend.constants.UserRole;
import com.cruise.backend.exceptions.NotFoundException;
import com.cruise.backend.exceptions.UserAlreadyExistsException;
import com.cruise.backend.models.User;
import com.cruise.backend.repositories.UserRepo;
import com.cruise.backend.security.JwtHelper;
import io.jsonwebtoken.ExpiredJwtException;
import jakarta.transaction.Transactional;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class UserService implements UserDetailsService {

    private final PasswordEncoder passwordEncoder;
    private final JwtHelper helper;
    private final UserRepo userRepo;
    private final MembershipService membershipServ;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.getByEmail(username);
    }

    public List<User> getAll() {
        return userRepo.findAll();
    }

    public User getById(String id) {
        return userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User Not found By ID ..."));
    }

    public User getByEmail(String email) {
        return userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User Not found By Email..."));
    }

    @Transactional
    public User register(User user) {
        if(user.getRole() != UserRole.ROLE_ADMIN){
            if(userRepo.findByInvitationCode(user.getInvitationCode()).isEmpty()){
                throw new NotFoundException("Invalid Invitation Code");
            }
        }else{
         membershipServ.findAll();
        }
        if (userRepo.findByEmail(user.getEmail()).isPresent()) {
            throw new UserAlreadyExistsException("User with email " + user.getEmail() + " already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        user.setUsageStatus(UsageStatus.ACTIVE);
        user.setMembershipLevel(membershipServ.findByName("VIP0"));
        return userRepo.save(user);
    }

    public String checkAndRenewToken(User user) {
        String token;

        if (user.getNumberOfLogins() == 0 || user.getToken() == null || user.getToken().isBlank()) {
            // First login OR no token saved yet
            token = this.helper.generateToken(user);
            user.setToken(token);
            userRepo.save(user);
            return token;
        }

        token = user.getToken();

        try {
            this.helper.isTokenValid(token, user);
        } catch (ExpiredJwtException e) {
            String newToken = this.helper.generateToken(user);
            user.setToken(newToken);
            userRepo.save(user);
            return newToken;
        }

        return token;
    }


    public void incrementLoginCount(User user) {
        int currentCount = user.getNumberOfLogins() != null ? user.getNumberOfLogins() : 0;
        user.setNumberOfLogins(currentCount + 1);
        userRepo.save(user);
    }

    public User update(User user) {
        User exisitingUser = this.getById(user.getId());
        BeanUtils.copyProperties(user, exisitingUser);
        return userRepo.save(exisitingUser);
    }

    public String delete(String id) {
        User exisitingUser = this.getById(id);
        exisitingUser.setIsDeleted(true);
        userRepo.save(exisitingUser);
        return "Deleted User by ID : " + id;
    }
}
