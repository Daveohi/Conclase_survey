const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

app.use(express.json()); // allows you write json objects to body
app.use(express.urlencoded({ extended: false })); //
app.use(cookieParser()); // allows you access cookies and its contents
//app.use(cors()); 
app.use(cors({
  origin: 'http://localhost:5174', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allow only specified HTTP methods
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true // Allow credentials
}))
dotenv.config();

const db = require("./models");

//routers
const authRouter = require("./routes/UserAuth.route")
const userRouter = require("./routes/User.route")
const surveyRouter = require("./routes/Survey.route")
const questionRouter = require("./routes/Question.route")
const optionRouter = require("./routes/Option.route")
const responseRouter = require("./routes/Response.route")
const answerRouter = require("./routes/Answer.route")



//endpoint routes
app.use("/auth", authRouter)
app.use("/users", userRouter)
app.use("/survey", surveyRouter)
app.use("/questions", questionRouter)
app.use("/option", optionRouter)
app.use("/response", responseRouter)
app.use("/answer", answerRouter)


// app.use((req, res, next) => {
//   if (req.url.endsWith('.js')) {
//     res.type('application/javascript');
//   }
//   next();
// });

// app.use((req, res, next) => {
//   console.log(`Incoming request: ${req.method} ${req.url}`);
//   next();
// });


//middleware to handle errors
app.use((err,req, res, next) => {
  const statusCode = err.statusCode || 500  
  const message = err.message || 'Internal Server Error'
  return res.status(statusCode).json({
    success: false,
    statusCode,   //after es6 if the variable and key has same name, then no need to write it as-- statusCode: statusCode
    message,
  }) 

})


db.sequelize.sync().then(() => {
  const port = 4005;
  app.listen(port, () => {
    console.log("Server listening on " + port);
  });
});
