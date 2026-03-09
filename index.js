const express=require("express");
const app =express();



//parsing krni hoti hai

app.use(express.json())


app.get("/about",(req,res)=>{
    res.send({"name":"rohit","age":20,"account":1000,});
})

app.post("/about",(req,res)=>{
    console.log(req.body);
    res.send("data is successfully fetch");
})



app.use("/contact",(req,res)=>{
    res.send("I am your contact page");
})

app.use("/",(req,res)=>{
    
    res.send("I am your home page");
})

app.listen(4000,()=>{

    console.log("listening at port 4000")
})
