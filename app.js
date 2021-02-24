const express=require("express")
const app=express()
const path=require('path')

app.use(express.urlencoded({extended:true}))
app.set('views',path.join(__dirname,"views"))
app.set("view engine","ejs")

let c=[
    {
        id:0,
        username:"Todd",
        comment:"lol,that is so funny"
    },
    {
        id:1,
        username:"Dame Maggie Smith",
        comment:"lol,that is so funny"
    },

    {
        id:2,
        username:"Jeremy Clarkson",
        comment:"How hard could it be"
    },

    {
        id:3,
        username:"Richard Hammond",
        comment:"Moving ON"
    },

    {
        id:4,
        username:"James May",
        comment:"you imphestine pillock"
    }

]
let id =4;
app.get("/main",(req,res)=>{
    res.render('main.ejs',{c})
})
app.get("/main/new_comment",(req,res)=>{
    res.render("new_comment.ejs")
})
app.post("/main/new_comment",(req,res)=>{
    const {username,comment}=req.body
    id+=1;
    console.log(username,comment)
    c.push({id,username,comment})
    console.log(c)
    res.redirect("/main")
    
})
app.get("/main/search:id",(req,res)=>{
    let number=parseInt(req.params.id[1])
    console.log(number)
    
    console.log(c[number].username,c[number].comment)
    res.redirect("/main")
    
})



app.listen(3000,()=>{
    console.log("LISTENING ON PORT 3000")
})