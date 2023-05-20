const express = require("express"); 
const bodyParser = require("body-parser");
// const apicache = require("apicache");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const { swaggerDocs: V1SwaggerDocs } = require("./v1/swagger");


const app = express(); 
// const cache = apicache.middleware;
const PORT = process.env.PORT || 1337; 

// For testing purposes 
// app.get("/", (req, res) => { 
//     res.send("<h2>It's Working!</h2>"); 
// }); 

app.use(bodyParser.json());
// app.use(cache("2 minutes"));
app.use("/api/v1/workouts", v1WorkoutRouter);

app.listen(PORT, () => { 
    console.log(`API is listening on port http://localhost:${PORT}/api/v1/workouts`); 
    V1SwaggerDocs(app, PORT);
});