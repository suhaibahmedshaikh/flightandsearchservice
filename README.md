# Welcome to Flight and Search Service

## Project Setup

- clone the project on your local
- Excute `npm install` on the same path as of your root directory of the downloaded project
- Create a new `.env` file in the root directory and add the following environment variables
  - `PORT=3000`
- Inside the `src/config` folder create a new file `config.json` and then add the following piece of json

```
{
  "development": {
    "username": "<YOUR_DB_LOGIN_NAME>",
    "password": "<YOUR_DB_PASSWORD>",
    "database": "Flights_Search_db_dev",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}

```

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create` and then execute `npx sequelize db:migrate`

## DB Desing

- Airplane Table
- Flights Table
- Airport Table
- City Table

- A flight belongs to an airplane but one airplane can be used in multiple flights
- A city has many airports but one airport belongs to a city
- One airport can have many flights but a flight belongs to one airport

## Tables

### City -> id, name create_at, updated_at

### Airport -> id, name, address, city_id, created_at, updated_at

    Relationships -> City has many Airports and Airport belongs to City (one to Many)
