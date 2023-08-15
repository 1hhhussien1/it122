import { Car } from "./models/Car.js";
import express from 'express';
import { getAll, getItem } from './hw2/data.js'; 
app.use('/api', cors()); // set Access-Control-Allow-Origin header for api route
app.get('/api/cars', (req,res) => {
    Car.find({}).lean()
      .then((cars) => {
        res.json(cars);
      .catch(err =>  {
        res.status(500).send('Database Error occurred');
      })
});
app.get('/api/cars/:model', (req,res) => {
    Car.findOne({ model:req.params.model }).lean()
        .then((car) => {
           res.json(car);
        })
        .catch(err => {
            res.status(500).send('Database Error occurred');
        });
});
res.json(cars.map((a) => {
           return {
               name: a.name,
               make: a.make,
               model: a.model

           }
       });
});
fetch("/api/v1/cars")
    .then((response) => response.json())
    .then(results => console.log(results));
let car = {name:'Car B',make:'Tesla',model: 'Model S'} fetch("/api/v1/add/", { method: "POST", headers: { 'Content-Type': 'application/json' }, body: JSON.stringify(car) }) .then(res => res.json()) .then((json) => { console.log(json) });