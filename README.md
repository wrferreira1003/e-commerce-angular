# E-commerce Angular

## Descrição do Projeto

Este é um projeto de e-commerce desenvolvido com Angular 19, utilizando a estrutura Nx para gerenciamento de monorepo. O projeto está em fase inicial de desenvolvimento, configurado com as dependências e estrutura básica para a construção de uma aplicação de comércio eletrônico moderna e escalável.

## Tecnologias Utilizadas

- Angular 19.2.0
- RxJS 7.8.0
- Nx 20.8.0
- Jest para testes unitários
- Cypress para testes E2E
- SCSS para estilização

## Estrutura do Projeto

O projeto segue a estrutura padrão de aplicações Angular com Nx:

- **src/app**: Contém os componentes, serviços e módulos da aplicação
- **src/assets**: Arquivos estáticos como imagens e ícones
- **src/styles**: Arquivos de estilo global da aplicação

## Arquitetura

O projeto segue o Princípio de Responsabilidade Única (SRP), organizando o código em:

- **Componentes**: Responsáveis pela interface do usuário
- **Serviços**: Encapsulam a lógica de negócio e comunicação com APIs
- **Modelos**: Definem as estruturas de dados utilizadas na aplicação
- **Rotas**: Gerenciam a navegação entre as diferentes páginas da aplicação

## Funcionalidades Previstas

- Catálogo de produtos
- Carrinho de compras
- Sistema de autenticação de usuários
- Checkout e pagamento
- Gerenciamento de pedidos
- Painel administrativo

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn

### Instalação

```bash
# Clonar o repositório
git clone [url-do-repositorio]

# Instalar dependências
npm install

# Iniciar o servidor de desenvolvimento
npm start
```

### Scripts Disponíveis

- `npm start`: Inicia o servidor de desenvolvimento
- `npm run build`: Compila o projeto para produção
- `npm test`: Executa os testes unitários

## Testes

- Testes unitários com Jest
- Testes E2E com Cypress

## Padrões de Código

O projeto utiliza ESLint e Prettier para garantir a consistência e qualidade do código.

## Contribuição

Para contribuir com o projeto, por favor siga os padrões de código estabelecidos e faça testes adequados antes de submeter pull requests.

## Status do Projeto

Em desenvolvimento inicial. As estruturas básicas estão sendo configuradas.
