package com.locadesk.service;

import com.locadesk.entity.Marca;
import com.locadesk.repository.MarcaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MarcaService {

    @Autowired
    private MarcaRepository marcaRepository;


    public String save(Marca marca){
        this.marcaRepository.save(marca);
        return "Marca salvo com sucesso";
    }


    public String update(Marca marca, Long id){
        marca.setId(id);
        this.marcaRepository.save(marca);
        return "Marca atualizado com sucesso";
    }

    public String deleteById(Long id){
            this.marcaRepository.deleteById(id);
            return "marca deletado com sucesso";
    }

    public List<Marca> findAll(){
        return this.marcaRepository.findAll();
    }

    public List<Marca> findByNome(String nome){
        return this.marcaRepository.findByNome(nome);
    }
    public Marca findById(long id) {
        Optional<Marca> marca = this.marcaRepository.findById(id);
        if(marca.isPresent())
            return marca.get();
        else
            return null;
    }


}
