# Aula 3

## Setup atualizado no Github

[Setup do Projeto](https://www.notion.so/Setup-do-Projeto-0ee287dac6434fe38108202aca35e0cc?pvs=21)

## Tecnologias e extensões

[Extensões recomendadas](https://www.notion.so/Extens-es-recomendadas-485f532d32c74592a899f380004f25e2?pvs=21)

## Criando nova branch

```bash
git checkout -b aula-3
```

## Commits com Conventional Commits

[Conventional Commits e Commitzen](https://www.notion.so/Conventional-Commits-e-Commitzen-0a93635056914b5e8143d297dc3438c7?pvs=21)

## Executando tarefas

- Executando pelo terminal
- Executando pela extensão Nx Console
- De onde vem essas tarefas?

## Entendendo a responsabilidade da App

[Camada App](https://www.notion.so/Camada-App-b2b6bb2658274e529debcee2fdf8f703?pvs=21)

## Módulo de Layout: Criando nossa primeira Lib

```bash
npx nx g @nx/angular:library --name=layout --directory=modules/feature/layout --projectNameAndRootFormat=as-provided --standalone=false --style=scss
```

## Verificando nossa arquitetura

```bash
npx nx graph
```

## Header: Criando nosso primeiro componente

```bash
npx nx g @nx/angular:component --name=header --directory=header --export=true --standalone=false --nameAndDirectoryFormat=as-provided
```

## Integração

- Importando o componente Header na App principal
- Entendendo o Path Alias

## Verificando nossa arquitetura novamente

```bash
npx nx graph
```

## Tudo pronto! Podemos commitar? Ainda não 🤔

Não é uma boa prática realizar commits com erros de **test** ou **lint**!

## Conventional Commits e Commitzen

[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

Os Conventional Commits são um padrão de nomenclatura de commits que segue uma convenção específica para descrever de forma clara e concisa o propósito da alteração. Isso inclui um prefixo indicando o tipo da alteração (como **“feat”** para novas funcionalidades ou **“fix”** para correções de bugs), seguido por uma descrição sucinta da mudança. Além disso, os commits podem incluir informações adicionais, como o escopo da alteração e uma mensagem mais detalhada.

https://gist.github.com/qoomon/5dfcdf8eec66a051ecd85625518cfd13

### Benefícios dos Conventional Commits

1. **Clareza na Comunicação**: O uso de um padrão predefinido torna mais fácil para todos os membros da equipe entenderem rapidamente o propósito de um commit.
2. **Histórico de Alterações Significativo:** Um histórico bem estruturado ajuda a rastrear a evolução do projeto ao longo do tempo e facilita a busca por alterações específicas.
3. **Geração de Changelogs Automáticos:** Ferramentas podem analisar os commits seguindo a convenção e gerar automaticamente changelogs e release notes.

### Integração do Commitlint e Commitizen com o Nx

O Nx Build System, conhecido por sua eficiência no desenvolvimento de projetos em escala, permite uma integração suave das bibliotecas C**ommitlint** e **Commitizen**. O Commitlint valida os commits em relação ao padrão Conventional Commits, enquanto o Commitizen facilita a criação de commits seguindo essa convenção.

Além disso, vamos instalar uma extensão do Commitlint chamada [**Config-Nx-Scopes**](https://www.npmjs.com/package/@commitlint/config-nx-scopes). Ela nos ajudará a validar se o o escopo do nosso commit está válido de acordo com os módulos existentes do seu Workspace Nx.

# Camada App

A camada de App dentro da arquitetura tem o poder de executar tarefas como **serve**, **build** e **deploy.**

## Responsabilidades

- Possuir as rotas iniciais da aplicação via Lazy Loading
- Possuir somente o componente inicial (`AppComponent`) que redireciona para outras rotas via `<router-outlet>` e integra os componentes do Layout (que estarão presentes em todas as páginas)

Exemplo:

![Exemplo](/Users/wrferreira/Desktop/e-commerce-angular/documentos/camada_app.webp)
