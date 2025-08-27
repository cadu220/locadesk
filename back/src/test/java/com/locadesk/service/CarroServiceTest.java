package com.locadesk.service;

import com.locadesk.entity.Acessorio;
import com.locadesk.entity.Carro;
import com.locadesk.entity.Marca;
import com.locadesk.repository.CarroRepository;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.Arrays;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
public class CarroServiceTest {

    @Mock
    private CarroRepository carroRepository;

    @InjectMocks
    private CarroService carroService;

    @Test
    void deveSalvarEEncontrarCarro() {
        Marca marca = new Marca();
        marca.setId(1L);
        marca.setNome("Toyota");

        Acessorio acessorio = new Acessorio();
        acessorio.setId(1L);
        acessorio.setNome("Ar Condicionado");

        Carro carro = new Carro();
        carro.setId(1L);
        carro.setNome("Corolla");
        carro.setMarca(marca);
        carro.setAno(2023);
        carro.setAcessorio(Arrays.asList(acessorio));

        when(carroRepository.save(any(Carro.class))).thenReturn(carro);

        String carroSalvo = carroService.save(carro);

        assertNotNull(carroSalvo);
        assertEquals("Carro salvo com sucesso",carroSalvo);
        verify(carroRepository, times(1)).save(any(Carro.class));
    }

    @Test
    void deveBuscarCarroPorId() {
        Carro carro = new Carro();
        carro.setId(1L);
        carro.setNome("Civic");
        carro.setAno(2022);

        when(carroRepository.findById(1L)).thenReturn(Optional.of(carro));

        Carro encontrado = carroService.findById(1L);

        assertTrue(encontrado != null);
        assertEquals("Civic", encontrado.getNome());
        verify(carroRepository, times(1)).findById(1L);
    }

    @Test
    void deveDeletarCarro() {
        Long id = 1L;

        doNothing().when(carroRepository).deleteById(id);

        carroService.deleteById(id);

        verify(carroRepository, times(1)).deleteById(id);
    }

    @Test
    void deveListarTodosOsCarros() {
        Carro c1 = new Carro();
        c1.setNome("Fiesta");
        Carro c2 = new Carro();
        c2.setNome("Gol");

        when(carroRepository.findAll()).thenReturn(List.of(c1, c2));

        List<Carro> carros = carroService.findAll();

        assertEquals(2, carros.size());
        assertEquals("Fiesta", carros.get(0).getNome());
        assertEquals("Gol", carros.get(1).getNome());
        verify(carroRepository, times(1)).findAll();
    }
}
