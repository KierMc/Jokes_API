const Joke = require("../models/jokes.model")

module.exports.readAll = (req, res) => {
    Joke.find()
    .then((foundJokes)=>{
        res.json({results: foundJokes})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.readOne = (req, res) => {
    Joke.findOne({_id:req.params.id})
    .then((foundJoke)=>{
        res.json({results: foundJoke})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.create = (req, res) => {
    Joke.create(req.body)
    .then((newJoke)=>{
        res.json({results: newJoke})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.update = (req, res) => {
    Joke.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then((updatedJoke)=>{
        res.json({results: updatedJoke})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}
module.exports.delete = (req, res) => {
    Joke.deleteOne({_id: req.params.id})
    .then((deletedJoke)=>{
        res.json({results: deletedJoke})
    })
    .catch((err)=>{
        res.json({message: "Something went wrong", err})
    })
}