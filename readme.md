# **Budget App**

## I.BACKEND

**Create a docker container for the database (postgreSQL)**

```sh
docker compose up
```

**Install the dependecies:**

```sh
cd server
yarn
```

**Set the necessary ENV variables:**

```sh
DATABASE_URL="postgresql://user:password@localhost:5432/budget-app?schema=public"
BACKEND_PORT=5100
```

**Generate the database schema:**

```sh
yarn prisma db push
```

**Start the server:**

```sh
yarn dev
```

## II.FRONTEND

**Install the dependecies:**

```sh
cd frontend
yarn
```

**Start the application:**

```sh
yarn dev
```
