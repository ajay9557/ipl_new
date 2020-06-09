var a1=require('./public/data1.json');
var express=require('express');
var app=express();

app.use(express.static("public"));
app.get("/extraRunConcededByEachTeam",function(req,res){
    var season=req.query.year;
    var result=a1.extraRunConcededByEachTeam[season];
    res.json(result);
})
app.listen(process.env.PORT || 3000,()=> console.log('Gator app listening on port'));