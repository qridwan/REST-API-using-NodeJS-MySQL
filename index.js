const express = require('express')
const app = express()
const usersRoutes = require("./routes/users.route");
const postsRoutes = require("./routes/posts.route");

app.use(express.json())
const swaggerJsdoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

/** Swagger Initialization - START */
const swaggerOption = {
    swaggerDefinition: (swaggerJsdoc.Options = {
      info: {
        title: "my-community",
        description: "API documentation",
        contact: {
          name: "Ridwan",
        },
        servers: ["http://localhost:4000/"],
      },
    }),
    apis: ["index.js", "./routes/*.js"],
  };
  
  const swaggerDocs = swaggerJsdoc(swaggerOption);
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));
  /** Swagger Initialization - END */
  

app.get('/', (req, res) => {
res.send("listening")
})

app.use("/users", usersRoutes);
app.use("/posts", postsRoutes);
app.listen(4000)