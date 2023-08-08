import mongoose from 'mongoose';
const { Schema } = mongoose;

import { connectionString } from "../credentials.js";

// For security, connectionString should be in a separate file and excluded from git

mongoose.connect(connectionString, {
    dbName: 'it-projects',
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('open', () => {
  console.log('Mongoose connected.');
});

// define data model as JSON key/value pairs
// values indicate the data type of each key
const carsSchema = new Schema({
 name: String,
 make: String,
 model:String,
 year: String
});

export const Car = mongoose.model('Car', carsSchema);