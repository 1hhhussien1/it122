import express from 'express';
import { getAll, getItem } from '../hw2/data.js'; 
const app = express();
app.set ('port', process.env.PORT || 3000);
app.use(express.static('pubic'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  console.log(req.url)
  res.render('home', {cars: getAll()});
});
app.get('/cars/:id', (req,res) => {
  console.log(req.url)
  res.render('detail', {car: getItem(req.params.id)});
});
app.get('/about', (req,res) => {
  console.log(req.url)
  res.send('This class is about making great web sites');
});

// define 404 handler
app.use((req,res) => {
  res,status(404);
  res.send('404 - Not found');
});
app.listen(app.get('port'), () => {
  console.log('Express started'); 
});

      