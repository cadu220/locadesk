package com.locadesk.controller;

import com.locadesk.entity.Acessorio;
import com.locadesk.service.AcessorioService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/acessorio")
@CrossOrigin("*")
public class AcessorioController {

    @Autowired
    AcessorioService acessorioService;

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USER')")
    @PostMapping("/save")
    public ResponseEntity<String> saveAcessorio(@RequestBody Acessorio acessorio){
       try {
           String mensagem  = this.acessorioService.save(acessorio);
           return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
       } catch (RuntimeException e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
       }
    }

    @PreAuthorize("hasRole('ADMIN') OR hasRole('USER')")
    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCar(@RequestBody Acessorio acessorio, @PathVariable Long id){
        try {
            String mensagem = this.acessorioService.update(acessorio, id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id){
        try {
           String mensagem = this.acessorioService.deleteById(id);
            return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-acessorio")
    public ResponseEntity<List<Acessorio>> findAcessorios(){
        try{
            List<Acessorio> acessorios = this.acessorioService.findAll();
            return new ResponseEntity<>(acessorios, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<Acessorio> findById(@PathVariable Long id){
        try{
            Acessorio acessorio = this.acessorioService.findById(id);
            return new ResponseEntity<>(acessorio, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }



}
