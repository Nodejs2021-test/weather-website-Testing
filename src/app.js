const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');

// public folder path set
const publicpath = path.join(__dirname,'../public');

// Templates Folder Path set
const viwPath = path.join(__dirname,'../templates/views');

//Partials Path set
const partialPath = path.join(__dirname,'../templates/partials');

//Setup handlebars engine and views loactaion
app.set('view engine', 'hbs');
app.set('views',viwPath);
hbs.registerPartials(partialPath);
//Setup static directory to serve
app.use(express.static(publicpath));

app.get('/',(req,res)=>{

   res.render('index',{
       title:'Test',
       name:'Demo',
       header:"Index Header",
       footer:"Index Footer"
   })

});


app.get('/about',(req,res)=>{

    res.render('about',{

        title:'About',
       name:'Aout Us',
       header:"About Us Header",
       footer:"about Us Footer"

    });

 
 });

 app.get('/weather',(req,res)=>{

    if(!req.query.address)
    {
        return res.send({
                error:'You must provide an Address'
        });
    }

    res.send({
        forecast:'It is showing',
        location : 'India',
        Address:req.query.address
    });
 
 });


 app.get('*',(req,res)=>{

    res.render('404',{
        title:'404',
        name:'Tesinng',
        errorMessage:'page not found'
    });
 
 });

app.listen(3000,()=>
{
    console.log('Server is up to port 3000');
});
