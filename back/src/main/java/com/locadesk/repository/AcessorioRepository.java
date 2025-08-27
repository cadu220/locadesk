package com.locadesk.repository;

import com.locadesk.entity.Acessorio;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface AcessorioRepository extends JpaRepository<Acessorio, Long> {

    public List<Acessorio> findByNome(String nome);
}
