# Awesome Project Build with TypeORM

Steps to run this project:

1. Run `npm i` command
2. Create a `.env` file in root directory
3. Copy the content of `.env.example` file and paste in `.env`. Fill all fields with your database configuration.
4. Setup database settings inside `.env` file
5. Run `npm start` command

## Create Migrations
Command: `npm run typeorm migration:create -- -n MIGRATION_NAME`

## Run Migrations
Command: `npm run typeorm migration:run`

