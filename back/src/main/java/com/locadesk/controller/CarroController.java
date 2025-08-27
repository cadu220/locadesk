package com.locadesk.controller;

import com.locadesk.entity.Carro;
import com.locadesk.service.CarroService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/carros")
@CrossOrigin("*")
public class CarroController {

    @Autowired
    CarroService carroService;

    @PreAuthorize("hasRole('ADMIN')")
    @PostMapping("/save")
    public ResponseEntity<String> saveCar(@RequestBody Carro carro){
       try {
           String mensagem  = this.carroService.save(carro);
           return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
       } catch (RuntimeException e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
       }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCar(@RequestBody Carro carro, @PathVariable Long id){
        try {
            String mensagem = this.carroService.update(carro, id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id){
        try {
           String mensagem = this.carroService.deleteById(id);
            return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/find-carros")
    public ResponseEntity<List<Carro>> findCarros(){
        try{
            List<Carro> carros = this.carroService.findAll();
            return new ResponseEntity<>(carros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/find-by-nome")
    public ResponseEntity<List<Carro>> findCarrosByNome(@RequestParam String nome){
        try{
            List<Carro> carros = this.carroService.findByNome(nome);
            return new ResponseEntity<>(carros, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<Carro> findById(@PathVariable Long id){
        try{
            Carro carro = this.carroService.findById(id);
            return new ResponseEntity<>(carro, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @PreAuthorize("hasRole('ADMIN')")
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
