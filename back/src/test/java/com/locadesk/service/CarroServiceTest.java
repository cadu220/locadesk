package com.locadesk.service;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertThrows;

@SpringBootTest
public class CarroServiceTest {

    @Autowired
    CarroService carroService;

    @Test
    void cenario01(){
        assertThrows(Exception.class, () -> {
            boolean retorno = this.carroService.verificarNomeCarro("Peugeot 308", 2010);
        });
    }
}
