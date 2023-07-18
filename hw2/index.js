import express from 'express';

const app = express();
app.set ('port', process.env.PORT || 3000);
app.use(express.static('pubic'));
app.set('view engine', 'ejs');

app.get('/', (req,res) => {
  console.log(req.url)
  res.render('home', {name: req.query.name});
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
app.get('/foo', (req,res,next) => {
       if(Math.random() < 0.5) return next();
       res.send('sometimes this');
});
app.get('/foo', (req,res) => {
       res.send('and sometimes that');
});
app.get('/user(name)?', (req,res) => {
       res.render('user');
});
app.get('/user/:name', (req, res) => {

       let info = users.find((user) => {

           return user.name = req.params.name;

       })

       if(!info) return next();        // will eventually fall through to 404

       res.send(info);

})
import routes from './index.js';
const app_routes = routes(app); // passes ‘app’ instance to the routes module
export default = (app) => {
       app.get('/', (req,res) => {
               app.render('home');
       
       //… other routes
});
app.get('/get', (req,res) => {
  console.log(req.query); // display parsed querystring object
});
app.post('/get', (req,res) => {
  console.log(req.body); // display parsed form submission
})};
