const express = require("express");
const faker = require("faker");
const app = express();

//what does an api need
//routes
//logic for when we hit routes

//no components or state for now!

//middleware- functions that jump into the MIDDLE of an on-going process:
app.use(express.json());
app.use(express.urlencoded());
//C
//R
//U
//D

// app.get("/api/welcome", (request, response)=>{
//     console.log(request);
//     console.log("This is the welcome API route!!!"); 
// })

app.get("/api/welcome", (request, response)=>{
    console.log("This is the welcome API route!!!"); 
    response.json({message:"Welcome to our API- this is a response"});
})


app.post("/api/welcome", (request, response)=>{
    console.log("this is our post");
    response.json({
        message: ["Mern is great", "Merny goodness", "MernMern", "Merny Christmas"],
        ourRequestBody: request.body
    })

    console.log(request.body);
})

app.get("/api/faker", (request, response)=>{
    
    const name = faker.name.firstName();
    const email = faker.internet.email();

    response.json({
        firstName: name,
        userEmail: email
    })
});

app.listen(8000, () => console.log("You have successfully connected to port 8000!"));