package com.locadesk.repository;

import com.locadesk.entity.Carro;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CarroRepository extends JpaRepository<Carro, Long> {

    public List<Carro> findByNome(String nome);

    @Query("FROM Carro c WHERE c.ano > :ano")
    public List<Carro> findAcimaAno(int ano);
}
