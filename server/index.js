const express = require("express")
const app = express();
const cors = require("cors")
const mongoose = require("mongoose")
const userRoutes = require("./src/routes/user.routes")
const courseRoutes = require("./src/routes/course.routes")
const subscription = require("./src/routes/subsription.routes")
const userSubscription = require("./src/routes/userSubscription.routes")
const video = require("./src/routes/video.routes")


mongoose.connect("mongodb://localhost:27017")
// app.use(cors());
app.use(
  cors({
    // origin: ["http://localhost:5173", "http://localhost:5174"],
    origin:  "*",
    credentials: true, 
  })
);

app.use(express.json())

app.use("/api/v1", userRoutes)
app.use("/api/v1", courseRoutes)
app.use("/api/v1", subscription)
app.use("/api/v1", userSubscription)
app.use("/api/v1", video)


app.listen(8080, ()=>{
    console.log("App is listening at port 8080")
})