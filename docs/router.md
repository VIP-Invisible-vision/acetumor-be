# Routers

## **base**: all routers under `/api`

## **user**: `/user`
| Method      | Route        | Description            |
| ----------- | ------------ | ---------------------- |
| POST        | `/user`      | user login             |
| GET         | `/user/info` | get user personal info |
| POST        | `/user/info` | update user info       |


## **forum**: `/forum`

| GET      | `/forum/t/:tid` | get posts in a thread |
| -------- | ------------- | --------------------- |
| GET      | `/forum/t` | get all thread names |
| DELETE   | `/forum/t/:tid` | delete a thread |
| GET      | `/forum/p/:id`| get a post's info     |
| POST     | `/forum/p/:id`| reply to a post       |
| DELETE   | `/forum/p/:id`| delete a post         |
| PUT      | `/forum/p/:id`| modify a post         |
| POST     | `/forum/p`| make a new post       |
| POST     | `/forum/r/:id`| reply to a reply      |
| DELETE   | `/forum/r/:id`| delete a reply        |


## **info**: `/info`
| Method      | Route            | Description             |
| ----------- | ---------------- | ----------------------- |
| GET         | `/info/:num `    | get recent num articles |


## **test**: `/test` 
| Method      | Route            | Description                    |
| ----------- | ---------------- | ------------------------------ |
| GET         | `/test`          | get feedback of the user input |
| POST        | `/test`          | store test results             |


## **Record**: `/record` 
> user do not have permission to modify a record, only doctor can add comments
| Method      | Route            | Description         |
| ----------- | ---------------- | ------------------- |
| GET         | `/record`        | get all records     |
| GET         | `/record/:id`    | get a record        |
| POST        | `/record`        | add a record        |
| PUT         | `/record/id`     | modify a record     |
| DELETE      | `/record/id`     | delete a record     |