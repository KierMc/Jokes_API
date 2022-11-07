const mongoose = require("mongoose")

const database = "jokes_api"

mongoose.connect(`mongodb://localhost/${database}`, {
    useNewUrlParser: true,
    UseUnifiedTopology: true
})
    .then(() => console.log('Established a connection to the database'))
    .catch(err => console.log('Something went wrong when connecting to the database ', err));