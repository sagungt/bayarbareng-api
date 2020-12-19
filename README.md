# Bayar Bareng API
under development

Endpoint : http://localhost:8000/api/v1

Resource | Action | URI | Body
---------|--------|-----|------
Admin | Signing up user account | /sign-up (POST) | *name*, *email*, *password*, *password_repeat*
Admin | Login admin account | /login (POST) | *email*, *password*
Admin | List all admin user data | /list-admin (GET) | 
Admin | Editing admin user data | /admin/{id} (POST) | *name*, *email*, *password*, *password_repeat*
Admin | Deleting admin account | /admin/{id} (DELETE) | 
Customer | List all customer | /list-customer (GET) | 
Customer | Add new customer | /customer (POST) | *email*, *langganan*, *lama_langganan*
Customer | Remove customer | /customer/{id} (DELETE) | 
Customer | Edit customer | /customer/{id} (POST) | *email*, *langganan*, *lama_langganan*
Admin, Customer, Package | List all dummy available data | /all (GET) | 

## Install Package
`npm install`

## Start Develop

> Start testing using dummy

`npm run test`
