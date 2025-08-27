package com.locadesk.service;

import com.locadesk.entity.Carro;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import com.locadesk.repository.CarroRepository;

import java.util.List;
import java.util.Optional;

@Service
public class CarroService {

    @Autowired
    private CarroRepository carroRepository;


    public String save(Carro carro){
//        this.verificarNomeCarro(carro.getNome(), carro.getAno());
//        Marca marcaExistente = marcaRepository.findById(idMarca).get();
//        carro.setMarca(marcaExistente);
        this.carroRepository.save(carro);
        return "Carro salvo com sucesso";
    }

    public boolean verificarNomeCarro(String nome, int ano) {
        if(nome.equals("Peugeot 308") && ano < 2013){
            throw new RuntimeException("Erro ao inserir");
        }
        return true;
    }

    public String update(Carro carro, Long id){
//        this.verificarNomeCarro(carro.getNome(), carro.getAno());
        carro.setId(id);
        this.carroRepository.save(carro);
        return "Carro atualizado com sucesso";
    }

    public String deleteById(Long id){
            this.carroRepository.deleteById(id);
            return "carro deletado com sucesso";
    }

    public List<Carro> findAll(){
        return this.carroRepository.findAll();
    }

    public List<Carro> findByNome(String nome){
        return this.carroRepository.findByNome(nome);
    }
    public Carro findById(long id) {
        Optional<Carro> carro = this.carroRepository.findById(id);
        if(carro.isPresent())
            return carro.get();
        else
            return null;
    }


    public List<Carro> findByAcimaAno(int ano){
        return this.carroRepository.findAcimaAno(ano);
    }

}
