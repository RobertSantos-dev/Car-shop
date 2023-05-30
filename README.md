# Car shop
Este projeto foi desenvolvido durante o **modulo de BackEnd** da **Trybe**. Por conta disso todos os arquivos de configuração foram feitos pela instituição.

## Resumo
Este projeto tem como objetivo gerenciar uma concessonária de veiculos, utilizando ferramentas como `POO`, `API CRUD` e `MongoDb` por meio do ODM `Mongoose`. Além tambem de usar metodologias como **BDD**, **TDD**, **SOLID**.

Este projeto é Desenvolvido para **BackEnd**, e por isso não contem uma interface para o client.

<br>

## Sumário
[Explicação](#explicação)

[Tecnologias e Ferramentas](#tecnologias-e-ferramentas)

[Instalação](#instalação)

<br>

## Explicação
Para realizar ações como `Create, Read, Update, Delete`, foi usado API Restfull por meio do **Express**. E suas rotas são:
<details>
  <summary>GET</summary>
  <ul>
    <li><code>/cars</code>: Retorna todos os carros que estão no banco de dados.</li>
    <li><code>/cars/:id</code>: Retorna um carro selecionado pelo paramentro <code>id</code></li>
    <li><code>/motorcycles</code>: Retorna todas as motocicletas que estão no banco de dados.</li>
    <li><code>/motorcycles/:id</code>: Retorna uma motocicleta selecionada pelo paramentro <code>id</code></li>
  </ul>
</details>

<details>
  <summary>POST</summary>
  <ul>
    <li>
      <div><code>/cars</code>: Cria um novo carro ao banco de dados.</div>
      <div>
<pre>
  <code>
  # Request
  {
     model: string,
     year: number,
     color: string,
     status: boolean,
     buyValue: number,
     seatsQty: number,
     doorsQty: number
  }
  </code>
</pre>
      </div>
    </li>
    <li>
      <div>
        <code>/motorcycles</code>: Cria uma nova motocicleta ao banco de dados.
      </div>
      <div>
<pre>
  <code>
  # Request
  {
     model: string,
     year: number,
     color: string,
     status: boolean,
     buyValue: number,
     category: string,
     engineCapacity: number
  }
  </code>
</pre>
      </div>
  </li>
  </ul>
</details>

<details>
  <summary>PUT</summary>
  <ul>
    <li>
      <div><code>/cars/:id</code>: Atualiza um carro selecionado pelo paramentro <code>id</code>.</div>
      <div>
<pre>
  <code>
  # Request
  {
     model: string,
     year: number,
     color: string,
     status: boolean,
     buyValue: number,
     seatsQty: number,
     doorsQty: number
  }
  </code>
</pre>
      </div>
    </li>
    <li>
      <div>
        <code>/motorcycles/:id</code>: Atualiza uma motocicleta selecionada pelo paramentro <code>id</code>
      </div>
      <div>
<pre>
  <code>
  # Request
  {
     model: string,
     year: number,
     color: string,
     status: boolean,
     buyValue: number,
     category: string,
     engineCapacity: number
  }
  </code>
</pre>
      </div>
    </li>
  </ul>
</details>

<br>

Toda vez que uma destas ações forem realizadas. Sera retornado um `status`, e um `message` ou um objeto em `json`, lembrando que, não necessariamente, o arquivo `json` é exatamente o que esta no banco de dados, mas sim uma converção que é feita no backend para melhor leitura no retorno da `API`. Exemplos:

**status**: 201
``` json
{
  "id": "6348513f34c397abcad040b2",
  "model": "Marea",
  "year": 2002,
  "color": "Black",
  "status": true,
  "buyValue": 15.990,
  "doorsQty": 4,
  "seatsQty": 5
  "seatsQty": 5
}
```

<br>

**status**: 422
```json
{ "message": "Invalid mongo id" }
```

<br>

## Tecnologias e Ferramentas
- Typescript
- MongoDb
- Mongoose
- Sinon e Chai
- Mocha
- Docker Compose e Dockerfile
- ESlint
- Express
- Node e ts-node-dev

<br>

## Instalação

```bash
# Baixar o repositorio
git clone git@github.com:RobertSantos-dev/Car-shop.git

# Instalar dependencias
cd Car-shop/
npm install

# Subir o container docker
docker-compose up -d

# Execute o servidor
npm run dev
```
