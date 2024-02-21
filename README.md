## Sobre a aplicação

O objetivo da aplicação é o gerenciamento de contatos, que foi feito de forma fullstack, com as possibilidades de cadastro de conta, criação, edição e exclusão dos contatos, além de msotrar os clientes vinculados.

## Instruções

# 1. Clone do repositório

No github copie o link SSH ou HTTPS na parte de Code, execute o seu terminal e rode o seguinte comando: git clone "link copiado".
Após a clonagem acesse o diretório com o comando: /cd "nome do diretório".

# 2. Instalação das dependencias do projeto

Para instalas as dependências do projeto basta abrir o terminal no diretório do back-end e executar o comando "npm install" e depois repetir o processo no diretório do front-end.

# 3. Configuração do .env

Para fazer a criação e configuração do .env, o .env.example deve ser usado como base.

# 4. Criação de database

Após a criação do .env deve ser feito a criação do database pelo postgress que será utilizado e adicionado no .env

# 5. Rodar as migrações

Após a criação da database as migrações devem ser rodadas utilizando o comando "npm run typeorm migration:run -- -d src/data-source" no diretório do back-end.

# 6. Execução da aplicação

Para executar a aplicação deve ser rodado o comando "npm run dev" no terminal com foco no diretório do back-end e também no diretório do front-end

# end-points:

## clients:

Criação: Requisição do tipo Post: /clients
Exemplo de um objeto com dados para criação:
{"nomeCompleto": "joao victor",
"email": "joaovictor1@kenzie.com",
"senha": "joaovictorkenzie",
"telefone": "933131313"}
Se a resposta da requisição for 201 a criação foi executada com sucesso, caso contrário ocorreu um erro.

Login: Requisição do tipo Post: /clients
Exemplo de um objeto com dados para login:
{"email": "joaovictor1@kenzie.com",
"senha": "joaovictorkenzie"}
Se a requisição retornar 200, o login foi efetuado com sucesso e retornada o token para autenticação da conta.

Leitura: Requisição do tipo Get: /clients
obs: essa requisição só pode ser feita atráves do imsonia, com o intuito de consultar as contas criadas, é necessário o token de login.
Exemplo de token:
"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyTmFtZSI6ImpvYW8gdmljdG9yIiwiaWF0IjoxNzA2NTUzNzc4LCJleHAiOjE3MDY1NTczNzgsInN1YiI6IjkifQ.\_IWWB-84_1UV9A0hj8wgRxCcsGu81Xi7ncuq0F33Lec"

Edição: Requisição do tipo Patch: /clients/:id
Para executar a edição da conta o usuário precisará de um objeto com as novas informações, do token de autenticação e do id da conta.
Exemplo de um objeto com dados para edição:
{"nomeCompleto": "joao victor",
"email": "joaovictor1@kenzie.com",
"telefone": "933131313"}

Deleção: Requisição do tipo Delete: /clients/:id
Para executar a deleção o usuário necessita do id da conta e do token de autenticação.
Se a resposta for 204, teve sucesso, caso contrário houve algum erro.

## contacts:

Criação: Requisição do tipo Post: /contacts
Para executar a criação de um contato, é necessário um token de autenticação e um objeto com os dados.
Exemplo de um objeto com dados para criação:
{"nomeCompleto": "kenzinho23",
"email": "kenzie@kenzie.com",
"telefone": 31541544}

Leitura: Requisição do tipo Get: /contacts
Para executar a requisição de leitura dos contatos é necessário apenas o token de autenticação.

Edição: Requisição do tipo Patch: /contacts/:id
Para executar a edição de um contato, é necessário um token de autenticação e um objeto com os novos dados e o id do contato.
Exemplo de um objeto com dados para edição:
{"nomeCompleto": "kenzinho23",
"email": "kenzie@kenzie.com",
"telefone": 31541544}

Deleção: Requisição do tipo Delete: /contacts/:id
Para executar a deleção o usuário necessita do id do contato e do token de autenticação.
Se a resposta for 204, teve sucesso, caso contrário houve algum erro.
