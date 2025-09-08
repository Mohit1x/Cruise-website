package com.cruise.backend.repositories;

import com.cruise.backend.models.Auditable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.NoRepositoryBean;

import java.util.List;

@NoRepositoryBean
public interface BaseRepo<T extends Auditable,ID> extends JpaRepository<T,ID> {

    List<T> findByIsDeletedFalse();

    List<T> findByIsDeletedTrue();
}
