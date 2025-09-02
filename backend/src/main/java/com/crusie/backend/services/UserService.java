package com.crusie.backend.services;

import com.crusie.backend.exceptions.UserAlreadyExistsException;
import com.crusie.backend.models.User;
import com.crusie.backend.repositories.UserRepo;
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
    private final UserRepo userRepo;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        return this.getByEmail(username);
    }

    public List<User> getAll(){
        return userRepo.findAll();
    }

    public User getById(String id){
        return userRepo.findById(id)
                .orElseThrow(() -> new RuntimeException("User Not found By ID ..."));
    }

    public User getByEmail(String email){
        return userRepo.findByEmail(email)
                .orElseThrow(() -> new RuntimeException("User Not found By Email..."));
    }

    public User register(User user){
        if(userRepo.findByEmail(user.getEmail()).isPresent()){
            throw new UserAlreadyExistsException("User with email " + user.getEmail() + " already exists");
        }
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return userRepo.save(user);
    }

    public User update(User user){
        User exisitingUser = this.getById(user.getId());
        BeanUtils.copyProperties(user,exisitingUser);
        return userRepo.save(exisitingUser);
    }

    public String delete(String id){
        User exisitingUser = this.getById(id);
        exisitingUser.setIsDeleted(true);
        return "Deleted User by ID : " + id;
    }
}
