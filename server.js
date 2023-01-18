const express=require("express")
const app=express();

const datarouter=require("./router/data");
const cors=require("cors");
app.use(cors());

app.use("/api",datarouter);

app.listen(process.env.PORT || 7080,()=>{
    console.log("Server is running on port number 7080....");
})