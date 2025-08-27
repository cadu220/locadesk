package com.locadesk.entity;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.List;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
public class Carro {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String nome;
    @ManyToOne
    @JoinColumn(name = "marca")
    private Marca marca;
    @ManyToMany
    @JoinTable(name = "carro_acessorio")
    private List<Acessorio> acessorio;
    private Integer ano;

//    @ManyToMany(cascade = CascadeType.ALL)
//    @JoinTable(name = "carro_proprietario")
//    private List<Proprietario> proprietarios;

}
