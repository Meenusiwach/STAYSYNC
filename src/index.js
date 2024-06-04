import express from "express"; // Corrected import statement

const app = express(); // Creating an instance of the Express application

// Setup routes and configurations
app.listen(8800 , () => {
    console.log("Server connected successfully");
});

app.get("/", (req, res) => {

    
    res.send("app is working successfullyand changes has been reflected");
    console.log("connected to port 8800");
});

app.get("/home" ,(res,req)=>{
    req(get.elementbyId);

})
