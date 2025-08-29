Sistema de Cadastro de Carros para Locadora

Este é um projeto de estudo desenvolvido com o objetivo de praticar conceitos de desenvolvimento full stack, incluindo front-end com Angular, back-end com Spring Boot, autenticação JWT, testes unitários e deploy em nuvem (AWS EC2).

Objetivo do Projeto:
  Criar uma aplicação simples para cadastro e listagem de carros de uma locadora, com suporte a autenticação de usuários via tokens JWT e interface baseada no MDBootstrap.

Tecnologias Utilizadas:
  Front-end
  
  Angular (Framework SPA)
  
  MDBootstrap Angular
  
  (componentes e layout responsivo)
  
  Consumo de API REST via HttpClient

Back-end:
  Spring Boot
  
  Spring Security (Autenticação e Autorização com JWT)
  
  Spring Data JPA (Acesso ao banco de dados)

Banco de Dados:
  MySQL (ambiente principal)

Testes:
  JUnit 5
  
  Mockito (Mocks e testes unitários)

Deploy:
  AWS EC2 (Instância Ubuntu para rodar o Back-end e Front-end)

Grupo de Segurança: Regras para permitir tráfego:
  Porta 22 (SSH): para acesso remoto via terminal
  
  Porta 80 (HTTP): para servir o front-end Angular pelo Apache
  
  Porta 8080 (Spring Boot): para a API REST

Funcionalidades:
  Cadastro de usuários
  
  Login com geração de Token JWT
  
  Listagem de carros cadastrados
  
  Proteção das rotas via autenticação JWT
  
  Interface responsiva utilizando MDBootstrap

Pré-requisitos
  Node.js e Angular CLI,
  Java 17+,
  Maven,
  MySQL configurado,
  Git

Tela de edição de veiculo
<img width="1912" height="671" alt="image" src="https://github.com/user-attachments/assets/7057b489-f597-40b9-8f87-bbd2833360ce" />

Tela de listagem
<img width="1903" height="470" alt="image" src="https://github.com/user-attachments/assets/455dc110-8d5a-49ac-bca9-bdb1eca1a4e3" />

Modal de inclusão
<img width="619" height="358" alt="image" src="https://github.com/user-attachments/assets/9a17223f-8c5c-46db-b6be-517f5c9987a2" />

Login
<img width="1899" height="610" alt="image" src="https://github.com/user-attachments/assets/e84300fe-9f66-4043-9a77-904823452168" />

Retorno de teste:
<img width="382" height="293" alt="image" src="https://github.com/user-attachments/assets/4f245b88-d6d5-41d2-b112-79350ebd5fb4" />





