const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");
const planRouter = require("./router/planRouter");
const userRouter = require("./router/userRouter");
const viewRouter = require("./router/viewRouter");
const reviewRouter = require("./router/reviewRouter");
app.use(cookieParser());
app.use(express.json());
// 
app.use(express.static("public"));
// templating engine
app.set("view engine", "pug");
// templates address
app.set("views", "views");

app.use("/api/reviews", reviewRouter);
app.use("/", viewRouter);
app.use("/api/plans", planRouter)
app.use("/api/users", userRouter);
// wildcard
app.use("*", function (req, res) {
  return res.status(404).json({
    status: "Resource not found",
  });
});

app.listen(3000, function () {
  console.log("Server is listening at port 3000");
});
// http routes
// plans
// json parse => req.body
// json=> http message body
// 1.
//userdefined middleware
// 2.
//3.
// app.param("planId", function (req, res, next, planId) {
//   if (planId <= 0 || planId > plans.length) {
//     return res.status(404).json({
//       status: "Invalid Id",
//     });
//   }
//   next();
// });

// app.use(function logger(req, res, next) {
//   console.log("Req url: " + req.url);
//   console.log(req.body);
//   next();
// });
// app.get("/api/plans", function (req, res) {
//   res.status(200).json({
//     status: "Request Recieved",
//   });
// });
// 3.
// creation => post


// **************************************plansection**************************




// ****************************************************user section**********************************************************






