package com.locadesk.controller;

import com.locadesk.entity.Carro;
import com.locadesk.service.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carros")
public class CarroController {

    @Autowired
    CarroService carroService;

    @PostMapping("/save")
    public ResponseEntity<Carro> saveCar(@RequestBody Carro carro){
       try {
           Carro newCarro = this.carroService.save(carro);
           return new ResponseEntity<>(newCarro, HttpStatus.CREATED);
       } catch (RuntimeException e) {
           return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
       }
    }

    @PostMapping("/update/{id}")
    public ResponseEntity<Carro> updateCar(@RequestBody Carro carro, @PathVariable Long id){
        try {
            Carro newCarro = this.carroService.update(carro, id);
            return new ResponseEntity<>(newCarro, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-carros")
    public ResponseEntity<List<Carro>> findCarros(){
        try{
            List<Carro> carros = this.carroService.findAll();
            return new ResponseEntity<>(carros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-by-nome")
    public ResponseEntity<List<Carro>> findCarrosByNome(@RequestParam String nome){
        try{
            List<Carro> carros = this.carroService.findByNome(nome);
            return new ResponseEntity<>(carros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-by-ano")
    public ResponseEntity<List<Carro>> findCarrosByAcimaAno(@RequestParam int ano){
        try{
            List<Carro> carros = this.carroService.findByAcimaAno(ano);
            return new ResponseEntity<>(carros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }


    @GetMapping("/teste")
    public ResponseEntity<String> findCarrosByAcimaAno(){
        try{
            return new ResponseEntity<>("Deu boaa", HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

}
