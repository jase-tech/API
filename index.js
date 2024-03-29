 const fs=require("fs/promises");
 const express=require("express");
 const cors=require("cors");
 const _ =require("lodash");
 const {v4:uuid}=require("uuid");
const { Server } = require("http");

 const app = express();
app.use(express.json());

app.get("/outfit",(req,res)=>{
    const tops=["black","white","orange","navy"];
    const jeans=["black","dark grey","grey","navy"];
    const shoes=["black","white","grey"];

    res.json({
        top:_.sample(tops),
        jeans:_.sample(jeans),
        shoes:_.sample(shoes)
    });
});
 
app.post("comments", async (req,res)=> {
const id = uuid();
const content = req.body.content;

if(!content){
    return res.sendStatus(400);
}
await fs.mkdir("data/comments", {recursive:true});
res.sendStatus(201);
});
 app.listen(3000,() => console.log("API Server is running..."));