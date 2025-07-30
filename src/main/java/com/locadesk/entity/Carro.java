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
    @ManyToOne(cascade = CascadeType.ALL)
    private Marca marca;
    private String modelo;
    private Integer ano;

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "carro_proprietario")
    private List<Proprietario> proprietarios;

}
