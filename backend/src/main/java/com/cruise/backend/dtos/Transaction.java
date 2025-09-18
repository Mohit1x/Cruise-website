package com.cruise.backend.dtos;

import com.cruise.backend.constants.TransactionType;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Transaction {

    @Enumerated(EnumType.STRING)
    private TransactionType type;
    private BigDecimal amount;

}
