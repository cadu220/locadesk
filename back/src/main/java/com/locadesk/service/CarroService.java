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
        this.verificarNomeCarro(carro.getNome(), carro.getAno());
        this.carroRepository.save(carro);
        return this.carroRepository.save(carro);
    }

    public boolean verificarNomeCarro(String nome, int ano) {
        if(nome.equals("Peugeot 308") && ano < 2013){
            throw new RuntimeException();
        }
        return true;
    }

    public Carro update(Carro carro, Long id){
        this.verificarNomeCarro(carro.getNome(), carro.getAno());
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
