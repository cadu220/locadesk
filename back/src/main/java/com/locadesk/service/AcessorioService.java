package com.locadesk.service;

import com.locadesk.entity.Acessorio;
import com.locadesk.repository.AcessorioRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class AcessorioService {

    @Autowired
    private AcessorioRepository acessorioRepository;


    public String save(Acessorio acessorio){
        this.acessorioRepository.save(acessorio);
        return "Acessorio salvo com sucesso";
    }


    public String update(Acessorio acessorio, Long id){
        acessorio.setId(id);
        this.acessorioRepository.save(acessorio);
        return "Acessorio atualizado com sucesso";
    }

    public String deleteById(Long id){
            this.acessorioRepository.deleteById(id);
            return "acessorio deletado com sucesso";
    }

    public List<Acessorio> findAll(){
        return this.acessorioRepository.findAll();
    }

    public List<Acessorio> findByNome(String nome){
        return this.acessorioRepository.findByNome(nome);
    }
    public Acessorio findById(long id) {
        Optional<Acessorio> acessorio = this.acessorioRepository.findById(id);
        if(acessorio.isPresent())
            return acessorio.get();
        else
            return null;
    }


}
