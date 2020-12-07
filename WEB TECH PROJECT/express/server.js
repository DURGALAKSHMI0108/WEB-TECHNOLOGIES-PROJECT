var ex=require('express')
var app=ex()
var bodyParser=require('body-parser')
var cp=require('cookie-parser')
app.set('views','./views')
app.set('view engine', 'pug')
const date = require('date-and-time');
const path = require('path');



 


var mc=require('mongodb').MongoClient

app.use(cp()) // populates req.cookies

app.use(bodyParser.json()); // populates req.body
app.use(ex.static('public')); 
app.use(bodyParser.urlencoded({ 
    extended: true
})); 





app.post('/submit',function(req,res)
{
    
    var obj={gender:req.body.gender,login_id:req.body.login_id, password:req.body.password, name:req.body.name, age:req.body.age, phone:req.body.phone}
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {

        var dbo=db.db("sportsclub")
        dbo.collection("membershipdetails").insertOne(obj,function(err,res) // add to the database
        {
            if (err) throw err; 

        })
    
    }
    )
    
    
    
    res.redirect('http://localhost:3000') // redirects to home page if succesful sign up
    
})


app.post('/login',function(req,res)
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var dbo=db.db("sportsclub")
        dbo.collection("membershipdetails").findOne({login_id:req.body.login_id, password:req.body.password},
            function(err,data)
        {
            

            
            if (data==undefined) res.redirect("http://localhost:3000/login") // if invalid credentials, directed to login page itself
            
            else
            {
            res.cookie("login_id",req.body.login_id)
            res.cookie("password", req.body.password)

        res.redirect('http://localhost:3000/personal') // if successful login , go to personalized page
            }
        })
    
    }
    )
    
    
})



app.get('/my_l',function(req,res) // return leisure bookings
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var dbo=db.db("sportsclub")
        dbo.collection('leisure').find({login_id:req.cookies.login_id, password:req.cookies.password}).toArray(
            function(err,obj)
        {
            var len=obj.length-1;
            
            res.render('l',{sport0:obj[len].sport, date0:obj[len].date, slot0:obj[len].slot})

        })
   
    }
    )
   
    
})

app.get('/my_c',function(req,res) //return coaching bookings
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var dbo=db.db("sportsclub")
        dbo.collection('mycoachings').find({login_id:req.cookies.login_id, password:req.cookies.password}).toArray(
            function(err,obj)
        {
            var len=obj.length-1;

            
            res.render('c',{sport0:obj[len].sport, days0:obj[len].days, time0:obj[len].time, coach0:obj[len].coach})

        })
   
    }
    )
   
    
})









app.post('/le',function(req,res) 
{
    res.redirect("http://localhost:3000/personal") // redirects to personal page
})

app.post('/co',function(req,res) 
{
    res.redirect("http://localhost:3000/personal") // redirects to personal page
})


app.get('/my_mat',function(req,res) //return my matches
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var dbo=db.db("sportsclub")
        dbo.collection('matches').find({login_id:req.cookies.login_id, password:req.cookies.password}).toArray(
            function(err,obj)
        {
            var len=obj.length-1;
            
            res.render('mat',{vs:obj[len].vs, date:obj[len].date, venue:obj[len].venue, time:obj[len].time, sport:obj[len].sport})

        })
   
    }
    )
   
    
})

app.post('/mo',function(req,res) 
{
    res.redirect("http://localhost:3000/personal") // redirects to personal page
})

app.post('/mp',function(req,res) 
{
    res.redirect("http://localhost:3000/personal") // redirects to personal page
})


app.get('/my_pay',function(req,res) //return my latest payment
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var dbo=db.db("sportsclub")
        dbo.collection('payments').find({login_id:req.cookies.login_id, password:req.cookies.password}).toArray(
            function(err,obj)
        {   
            if(obj[0]==undefined) // if no payment yet
            res.redirect("http://localhost:3000/personal") 
            else
            {
            var len=obj.length-1;
            
            res.render('mypay',{amount:obj[len].amount, dt:obj[len].dt})
            }
            
           

        })
   
    }
    )
   
    
})











app.get('/logout/yes',function(req,res)
{
    res.clearCookie('login_id')
    res.clearCookie('password')
    res.clearCookie('coaching')
   
    res.redirect("http://localhost:3000") // if it is a yes, then it goes to the home page - here second navigation bar is not there
})

app.get('/logout/no',function(req,res)
{
    res.redirect("http://localhost:3000/personal") // if no it goes to personal page  - here the 2nd naviagation bar remains
})


app.post('/feedback',function(req,res) // for feedback , take it in req.body and save it in a database
{
    
    mc.connect("mongodb://localhost:27017",{ useUnifiedTopology: true },
    function(err,db)
    {
        var obj={}
        obj.feedback=req.body.feedback 
        obj.rate=req.body.rate_s
        
        
        var dbo=db.db("sportsclub")
        dbo.collection("feedback").insertOne(obj, 
            function(err,res)
        {
            if(err) throw err
        })
   
    }
    )
   res.redirect("http://localhost:3000/personal")
    
})

app.post('/matches', function(req,res)
{
    mc.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, function(err,db)
    {
        if(!Array.isArray(req.body.match))
        {
        var dbo=db.db("sportsclub")
        
        var m=JSON.parse(req.body.match)
        
        
        var obj={login_id:req.cookies.login_id, password:req.cookies.password, vs:m.vs, age:m.age, date:m.date, venue:m.venue, time:m.time, sport:m.sport}
        dbo.collection('matches').insertOne(obj, function(err,res)
        {
            if (err) throw err;

        })
    
    
    
    if(req.cookies.coaching!=undefined)
    {
    
    if(req.cookies.coaching=='no') // it is leisure playing , then must pay
    {
    res.clearCookie('amount')
    res.cookie('amount', '1500')
    res.render('payment', {amount:1500})
    }
    
    else if(req.cookies.coaching=='yes')// they are getting coaching , then playing a match is free
    res.redirect("http://localhost:3000/personal") // should direct to personalized page
    }

    else // no leisure ,no coaching, then must pay
    {
    res.clearCookie('amount')
    res.cookie('amount', '1500')
    res.render('payment', {amount:1500})
    }
        }
        else // if select more than  1 option
        {
            res.redirect("http://localhost:3000/personal") // if we select more than 1 match, it redirects to personalized page
        }
})

    
    
})



app.post('/payment', function(req,res)
{
    mc.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, function(err,db)
    {
        var dbo=db.db("sportsclub")
        const now = new Date();
        date.format(now, 'YYYY/MM/DD HH:mm:ss');    
      
       
        var obj={login_id:req.cookies.login_id, password:req.cookies.password,amount:req.cookies.amount,dt:now}
        dbo.collection('payments').insertOne(obj, function(err,res)
        {
            if (err) throw err;

        })

    })
    
    res.redirect("http://localhost:3000/personal") 
})


app.post('/leisure', function(req,res)
{
    mc.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, function(err,db)
    {
        var dbo=db.db("sportsclub")
        
        if(!Array.isArray(req.body.sport))
    {
        var obj={login_id:req.cookies.login_id, password:req.cookies.password, sport:req.body.sport, date:req.body.date,slot:req.body.slot}
        dbo.collection('leisure').insertOne(obj, function(err,res)
        {
            if (err) throw err;

        })
    }
    else{
        for(i in req.body.sport)
        {
            var obj={login_id:req.cookies.login_id, password:req.cookies.password, sport:req.body.sport[i], date:req.body.date,slot:req.body.slot}
            dbo.collection('leisure').insertOne(obj, function(err,res)
            {
            if (err) throw err;

        })
        
        }

    }

    })
    if(req.cookies.coaching==undefined)
    {
    res.cookie('coaching','no')
    }
    res.redirect("http://localhost:3000/personal") // should direct to personalized page
})


app.post('/coaching', function(req,res)
{
    
    mc.connect('mongodb://localhost:27017', { useUnifiedTopology: true },function(err,db)
    {
        var dbo=db.db('sportsclub')
        
        if(!Array.isArray(req.body.sport))
        {
        dbo.collection('coaches').find({sport:req.body.sport}).toArray(function(err,obj)
        {
                 res.clearCookie('coaching') // whether it is defined or not - change it to yes
                 res.cookie('coaching','yes')
                
                
                res.render('coach', {coach1:obj[0].coach, time1:obj[0].time, days1:obj[0].days, amount1:obj[0].amount_per_month,coach2:obj[1].coach, time2:obj[1].time, days2:obj[1].days, amount2:obj[1].amount_per_month})
                
        })
    }
    else{
        res.redirect("http://localhost:3000/personal"); // redirect to personal page if more than 2 options are saved
    }
    })
    
})

app.post('/coach2',function(req,res){
    // i have req.body.choice - tells me about the name of the coach i have chosen
    //now get the amount of that coach
    //redirect to payment page
    //do the payment - store this history in the data base
    //then get back to personal page
    mc.connect('mongodb://localhost:27017', { useUnifiedTopology: true },function(err,db)
    {
        var dbo=db.db('sportsclub')
        
        
        dbo.collection('coaches').find({coach:req.body.choice}).toArray(function(err,obj)
        {
                var o=obj[0]
                o.login_id=req.cookies.login_id
                o.password=req.cookies.password
                dbo.collection('mycoachings').insertOne(o)

                res.clearCookie('amount')
                res.cookie('amount', obj[0].amount_per_month)
                res.render('payment', {amount:obj[0].amount_per_month})
              
        })
    })
    
})

app.get("/chart", function(req,res)
{
   
            res.sendFile(path.join(__dirname+'/cha.html')); // to go to html page
        
        })
   
 app.get('/ch', function(req,res)
 {
     res.redirect('http://localhost:3000/testimonials')
 }) 
 
 




app.listen(9000)