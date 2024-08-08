const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json())
const Article = require("./models/Article");


  


mongoose.connect("mongodb+srv://workgm203:uqg6aZW6qLt2uGLs@cluster0.j61d3zi.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")

.then(() => {
    console.log("Connected with the database");
}).catch((Error) => {
    console.log("Error in connecting with database" , Error);
})

  app.get("/counter", (req, res) => {
     let numbres = "";
      for(let i = 0 ; i <= 100 ; i++){
         numbres += i + " - ";
      }
    //   res.send(`the number count is :${numbres}`);

    // res.sendFile(__dirname + "/viewers/numbers.ejs")
    res.render("numbers.ejs" , {
        name : "Othmane",
        numbres : numbres,
    })
  });

 app.put("/test", (req, res) => {
         res.send("you visited hi");
 });

app.delete("/testingDelet" , (req , res) => {
    res.send("post request on add comment");
});

app.delete("/testingDelet" , (req , res) => {
    res.send("post request on add comment");
});

app.get("/FindSumm/:number1/:number2", (req , res)=>{

    const num1 = req.params.number1
    const num2 = req.params.number2
    console.log(req.params)

    const total = Number(num1) +  Number(num2) ;
    res.send(`the total are ${total}`)

    
})
app.get("/FindSumm2", (req , res)=>{

    // console.log(req.body);
    // console.log(req.query)
    // res.send(`Hello ${req.body.name}`)

    res.json({
        name : req.body.name ,
        age : req.query.age  


    })
})

//=========ARTICLES=========/

app.post("/articles" , async (req , res) => {
     const Na = new Article();
    
     const artTitel = req.body.articelTitle
     const artBody = req.body.articelBody
     res.send(artBody + " " + artTitel)

    
    Na.title = artTitel,
    Na.body = artBody
    await  Na.save()

    res.send("hhhhhhhhhh")
})




app.listen(4000, () => {
    console.log("I'm listening :)");
});