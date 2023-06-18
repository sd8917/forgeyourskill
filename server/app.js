import express from "express";

const app = express();


app.get("/", (req,res) => {

    return res.status(200).json({
        success:true,
        message:"Working on get api"
    })
})

app.listen(8000, () => {
    console.log("App is running on 8000 Port");
})