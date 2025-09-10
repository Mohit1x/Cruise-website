package com.cruise.backend.services;

import com.cruise.backend.models.Wallet;
import com.cruise.backend.repositories.WalletRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class WalletService {
     private final WalletRepo walletRepo;

     public Wallet add(Wallet wallet){
         return walletRepo.save(wallet);
     }


}
