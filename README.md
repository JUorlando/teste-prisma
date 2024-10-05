# API de Teste Técnica

## Descrição

Esta é uma API desenvolvida com **Node.js**, **Express** e **TypeScript**, utilizando **Prisma** como ORM para simulação de um banco de dados. A aplicação foi projetada para gerenciar usuários e documentos, com autenticação via **JWT** e segurança de senhas utilizando **bcrypt**.

## Tecnologias Utilizadas

- **Node.js**: Ambiente de execução JavaScript no servidor.
- **Express**: Framework web para Node.js.
- **TypeScript**: Superset do JavaScript que adiciona tipagem estática.
- **Prisma**: ORM para acesso a bancos de dados.
- **Bcrypt**: Biblioteca para hashing de senhas.
- **JSON Web Tokens (JWT)**: Padrão para autenticação.
- **Swagger**: Ferramenta para documentação de APIs.

## Pré-requisitos

Antes de começar, certifique-se de que você possui as seguintes ferramentas instaladas:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) (geralmente instalado com o Node.js)

## Instruções para Instalação

Siga os passos abaixo para configurar e executar a aplicação localmente:

1. **Clone o repositório:**

   git clone https://github.com/JUorlando/teste-prisma.git

2. **Instale as dependências:**

    Execute o seguinte comando para instalar as dependências necessárias:

    npm install

3. **Configuração do Banco de Dados:**

    O projeto está configurado para usar simular uma API real com Prisma. A pasta prisma contem o schema.prisma onde contém as models de user e document, a configuração do banco de dados é feita na pasta mock, onde podemos percorrer os arrays através de métodos criados, simulando assim um banco de dados real.

4. **Executar a Aplicação:**

    Para iniciar o servidor, utilize o comando:

    npm run dev

    O servidor estará rodando na porta 8888 por padrão.

5. **Documentação da API**

    A documentação da API está disponível através do Swagger. Para acessá-la, siga estas etapas:

    1- Abra o seu navegador e vá para a seguinte URL:

    http://localhost:8888/api-docs

    2- Você poderá visualizar todos os endpoints disponíveis, parâmetros esperados e exemplos de resposta.

**Contato**
      
   Desenvolvedor: José Orlando de Carvalho Júnior
   E-mail: juniororlandocv@gmail.com

**Licença**
   
   Este projeto está licenciado sob a MIT Licence
