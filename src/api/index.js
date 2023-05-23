const express = require("express"); 
const bodyParser = require("body-parser");
const v1WorkoutRouter = require("./v1/routes/workoutRoutes");
const v1PingRouter = require("./v1/routes/pingRouter.js");
const swaggerDocs = require('./v1/docs/swagger.js');
const path = require("path");


const app = express(); 
const PORT = process.env.PORT || 10000; 

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, "../public")));

app.use("/api/v1/workouts", v1WorkoutRouter);
app.use("/ping", v1PingRouter);

swaggerDocs(app, PORT);


app.listen(PORT, () => { 
    console.log(`API is listening on port http://localhost:${PORT}`);
    // V1SwaggerDocs(app, PORT);
});