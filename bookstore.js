const express=require("express");
const app = express();


const BookStore =[
{id:1,name:"harry potter",author:"DevFlux"},
{id:2,name:"friends",author:"rohit"},
{id:3 ,name:"Nexus",author:"kamal"},


]
app.use(express.json());
app.get("/book",(req,res)=>{
    res.send(BookStore);
})

app.get("/book/:id",(req,res)=>{
  const id =parseInt(req.params.id);
  const Book =BookStore.find(info=>info.id===id);
  res.send(Book);
})

app.post("/book",(req,res)=>{
    BookStore.push(req.body);
    res.send("data save successfully");
})

app.listen(5000,()=>{

    console.log("listening at port 5000")
})
