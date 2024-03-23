## API Para Testar Conhecimentos TypeScript e TDD (Test Driven Development)

**Descrição:**

Esta API foi criada para testar conhecimentos em TypeScript e TDD (Test Driven Development).

**Rotas:**

**POST /User:**

* **Criação de usuário:**
    * **Dados necessários:**
        * Nome
        * Email
        * Senha
    * **Dados esperados:**
        * Objeto com as informações do usuário criado, incluindo ID
          
**Exemplo de Retorno:**

  ![image](https://github.com/Withene/Auth_User_TDD_Typescript/assets/82597491/8d90be45-3f85-460c-85e3-624ee9c2daa2)
  * A resposta da API para a criação de um usuário.


**POST /Login:**

* **Autenticação de usuário:**
    * **Dados necessários:**
        * Email
        * Senha
    * **Dados esperados:**
        * Token de autenticação
          
**Exemplo de Retorno:**

  ![image](https://github.com/Withene/Auth_User_TDD_Typescript/assets/82597491/db09d66e-49c8-433d-80f8-bab731dea96e)
  * A resposta da API para login de um usuário

**Recursos utilizados:**

* Express
* Sequelize-Cli/Sequelize
* TypeScript
* Node.js

**Como iniciar:**

1. Instale as dependências com `yarn install`.
2. Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:
    * `DB_HOST`: Host do banco de dados
    * `DB_USER`: Usuário do banco de dados
    * `DB_PASS`: Senha do banco de dados
    * `DB_NAME`: Nome do banco de dados
    * `APP_SECRET`: Chave secreta da aplicação
3. Inicie a API com o comando `yarn dev`.
4. Acesse a API em `http://localhost:3000`.

**Observações:**

* É necessário ter um banco de dados PostgreSQL instalado e configurado.
* O token de autenticação é gerado com base na chave secreta definida no arquivo `.env`.

**Exemplo de uso:**

```
// Criação de usuário
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "nome": "João Silva",
    "email": "joaosilva@email.com",
    "senha": "123456"
  }' \
  http://localhost:3000/user

// Autenticação de usuário
curl -X POST \
  -H "Content-Type: application/json" \
  -d '{
    "email": "joaosilva@email.com",
    "senha": "123456"
  }' \
  http://localhost:3000/login
```

**Recursos adicionais:**

* Documentação do Express: [https://expressjs.com/en/4x/api.html](https://expressjs.com/en/4x/api.html)
* Documentação do Sequelize: [https://sequelize.org/](https://sequelize.org/)
* Documentação do TypeScript: [https://www.typescriptlang.
