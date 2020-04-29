# Movie Database

  Esse projeto nasceu como uma forma de testar os conhecimentos adquiridos em React, javascript, HTML e CSS durante essa quarentena.
  O projeto consiste em uma página web onde o usuário pode procurar filmes e obter informações básicas, como por exemplo rating e a description do filme.
  
  Para obter as informações necessárias sobre os filmes foi utilizada a API:  http://www.omdbapi.com/

## como rodar na sua máquina

  Para ter esse projeto rodando na sua máquina local primeiramente será necessário adquirir uma API key no seguinte link:
  
  *  http://www.omdbapi.com/
  
  É possível adquirir a Key de forma gratuita, porém nesse caso haverá um limite de requests que podem ser feitos em um dia. Aquirida sua chave basta substituir o valor da variável API_KEY no arquivo App.js pelo valor da sua chave:
  ```
  const API_KEY = "{insert your key here}"
  ```
 Após feito isso basta rodar o projeto como qualquer outra aplicação feita em React. No seu terminal dentro do diretório movie-database rode o comando:
 ```
 npm start
 ```
 E a aplicação estará disponível em localhost:3000.

