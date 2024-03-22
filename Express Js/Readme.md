# Notes

## Middleware

- Middleware functions are called during the request-response cycle in Express. When a request comes into your Express application, it goes through a series of middleware functions before finally generating a response.

- Each middleware function has the ability to modify the request and/or response objects, perform specific tasks, or terminate the request-response cycle.

- Middleware functions are executed sequentially, and they have access to the request (req) and response (res) objects, as well as the next function, which is used to pass control to the next middleware in the stack. This allows for modularizing your application's logic into smaller, reusable components, enhancing maintainability and flexibility.

## app.use()

In Express.js, the app.use() function is a middleware function that is executed for every incoming request.
