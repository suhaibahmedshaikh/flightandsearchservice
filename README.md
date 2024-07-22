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

- Once you've added your db config as listed above, go to the src folder from your terminal and execute `npx sequelize db:create`
