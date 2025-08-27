package com.locadesk.controller;

import com.locadesk.entity.Marca;
import com.locadesk.service.MarcaService;
import com.locadesk.service.MarcaService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/marca")
@CrossOrigin("*")
public class MarcaController {

    @Autowired
    MarcaService marcaService;

    @PostMapping("/save")
    public ResponseEntity<String> saveMarca(@RequestBody Marca marca){
       try {
           String mensagem  = this.marcaService.save(marca);
           return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
       } catch (RuntimeException e) {
           return new ResponseEntity<>(e.getMessage(), HttpStatus.BAD_REQUEST);
       }
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<String> updateCar(@RequestBody Marca marca, @PathVariable Long id){
        try {
            String mensagem = this.marcaService.update(marca, id);
            return new ResponseEntity<>(mensagem, HttpStatus.OK);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<String> deleteCar(@PathVariable Long id){
        try {
           String mensagem = this.marcaService.deleteById(id);
            return new ResponseEntity<>(mensagem, HttpStatus.CREATED);
        } catch (RuntimeException e) {
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-marcas")
    public ResponseEntity<List<Marca>> findMarcas(){
        try{
            List<Marca> marcas = this.marcaService.findAll();
            return new ResponseEntity<>(marcas, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }

    @GetMapping("/find-by-id/{id}")
    public ResponseEntity<Marca> findById(@PathVariable Long id){
        try{
            Marca marca = this.marcaService.findById(id);
            return new ResponseEntity<>(marca, HttpStatus.OK);
        }catch (Exception e){
            return new ResponseEntity<>(null, HttpStatus.BAD_REQUEST);
        }
    }



}
