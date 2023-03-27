const express = require('express');
const app = express();
const mongoose = require('mongoose')
const Teams = require('./models/teams.js')
const cors = require('cors')

app.use(express.json()); 
app.use(cors())

app.post('/madness', (req, res)=>{
    Teams.create(req.body)
    .then((createdTeams)=>{
        res.json(createdTeams)
    })
});


app.get('/madness', (req, res)=>{
    Teams.find({})
    .then((foundTeams) => {
        res.json(foundTeams)
    })
});

app.delete('/madness/:id', (req, res)=>{
    Teams.findByIdAndRemove(req.params.id)
    .then((deletedTeams)=> {
        res.json(deletedTeams)
    })
});


app.put('/madness/:id', (req, res)=>{
    Teams.findByIdAndUpdate(req.params.id, req.body, {new: true})
    .then((updatedTeams)=>res.json(updatedTeams))
});






app.listen(3000, ()=>{
    console.log('listening...');
});

mongoose.connect('mongodb://localhost:27017/teamscrud')
mongoose.connection.once('open', ()=>{
    console.log('connected to mongod...');
});