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

   ```bash
   git clone https://github.com/seu_usuario/seu_repositorio.git
   cd seu_repositorio

2. **Instale as dependências:**

    Execute o seguinte comando para instalar as dependências necessárias:

    npm install

3. **Configuração do Banco de Dados:**

    O projeto está configurado para usar o Prisma com um banco de dados SQLite. Certifique-se de que o arquivo dev.db está presente na pasta raiz do projeto. Caso não esteja, você pode gerar um novo banco de dados com o seguinte comando:

    npx prisma migrate dev --name init

4. **Executar a Aplicação:**

    Para iniciar o servidor, utilize o comando:

    npm run dev

    O servidor estará rodando na porta 8888 por padrão.

5. **Documentação da API**

    A documentação da API está disponível através do Swagger. Para acessá-la, siga estas etapas:

    1- Abra o seu navegador e vá para a seguinte URL:

    http://localhost:8888/api-docs

    2- Você poderá visualizar todos os endpoints disponíveis, parâmetros esperados e exemplos de resposta.

**Contribuições**

    Contribuições são bem-vindas! Se você deseja melhorar este projeto, sinta-se à vontade para fazer um fork e enviar um pull request.

**Contato**

    Desenvolvedor: José Orlando de Carvalho Júnior
    E-mail: juniororlandocv@gmail.com

**Licença**

    Este projeto está licenciado sob a MIT License.