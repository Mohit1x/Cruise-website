package com.cruise.backend.services;

import com.cruise.backend.constants.TransactionType;
import com.cruise.backend.dtos.Transaction;
import com.cruise.backend.models.Wallet;
import com.cruise.backend.repositories.WalletRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
@RequiredArgsConstructor
public class WalletService {
    private final WalletRepo walletRepo;

    public Wallet add(Wallet wallet) {
        return walletRepo.save(wallet);
    }

    public Wallet getByUserId(String id) {
        return walletRepo.findByUserId(id);
    }

    public void processTransaction(Transaction transaction, String id) {
        Wallet userWallet = getByUserId(id);
        BigDecimal balance = TransactionType.CREDIT.equals(transaction.getType()) ?
                userWallet.getBalance().add(transaction.getAmount())
                : userWallet.getBalance().subtract(transaction.getAmount());
        userWallet.setBalance(balance);
        walletRepo.save(userWallet);
    }
}
