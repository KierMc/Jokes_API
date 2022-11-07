const express = require ("express");
const app = express();
const port = 8000;

require("./config/mongoose.config");

app.use(express.json());
app.use(express.urlencoded({extended: true}));

const jokesRoutes = require("./routes/jokes.routes");
jokesRoutes(app);

app.listen(port, () => console.log(`Welcome to the Death Star!\nPlease report to Port ${port}`))