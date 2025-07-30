package com.locadesk.service;

import com.locadesk.entity.Carro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.locadesk.repository.CarroRepository;

import java.util.List;

@Service
public class CarroService {

    @Autowired
    private CarroRepository carroRepository;


    public Carro save(Carro carro){
        this.carroRepository.save(carro);
        return this.carroRepository.save(carro);
    }
    public Carro update(Carro carro, Long id){
        carro.setId(id);
        this.carroRepository.save(carro);
        return this.carroRepository.save(carro);
    }

    public List<Carro> findAll(){
        return this.carroRepository.findAll();
    }

    public List<Carro> findByNome(String nome){
        return this.carroRepository.findByNome(nome);
    }

    public List<Carro> findByAcimaAno(int ano){
        return this.carroRepository.findAcimaAno(ano);
    }

}
