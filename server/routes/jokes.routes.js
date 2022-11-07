const jokeController = require("../controllers/jokes.controller");

module.exports = (app) => {
    app.get("/api/jokes", jokeController.readAll)

    app.get("/api/jokes/:id", jokeController.readOne)

    app.post("/api/jokes", jokeController.create)

    app.put("/api/jokes/:id", jokeController.update)

    app.delete("/api/jokes/:id", jokeController.delete)
}