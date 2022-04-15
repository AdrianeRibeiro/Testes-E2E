# Tipos de testes

Unitários: Testam um componente/funcionalidade de forma isolada.
Integração: Testa como um ou mais componentes/funcionalides se comportam juntos(as)
E2E: Simula o que um usuário vai fazer na nossa aplicação diariamente.

# Banco de dados

Unitários: Não se conecta
Integração: Talvez
E2E: Sim (não só Banco de Dados, Qualquer conexão externa, inclusive APIS)

# E-commerce

- Realizar compra

1. Cadastra usuário no banco
2. Cadastra endereço no banco
3. Se comunica com gateway de pagamento para enviar a transação
4. Cadastra a compra no banco


Unitário: Não tem banco de dados e nem API do Gateway
E2E: Não é aconselhável ter mocks ou dados fakes

# Repository Pattern
- abstrair a comunicação com o banco de dados em repositórios