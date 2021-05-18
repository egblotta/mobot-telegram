# mobot-telegram
A telegram bot made with nodeJs



# Setup

Requisitos:
- [nodejs](https://nodejs.org/es/)
- [telegraf](https://telegraf.js.org/)

Opcional:
- [nodemon](https://www.npmjs.com/package/nodemon)

#### Clonar el repositorio
    $ git clone https://github.com/egblotta/mobot-telegram

#### Instalar telegraf bot API
    $ npm install telegraf

#### Instalar nodemon para facilitar el desarrollo
    $ npm install --save-dev nodemon

O también

    $ npm i nodemon -D

Esto lo instala como dependencia opcional de desarrollador.


#### Crear una copia de .env y actualizar el token

    $ cp .env-sample .env

pedir el token y pegarlo dentro de la variable de entorno


# Correr el Bot

    $ node bot.js

O con nodemon

    $ npm run dev 
    (en caso de que nodemon esté instalado como 'dev' "-D")


