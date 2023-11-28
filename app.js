// const express = require("express");
import "dotenv/config"
import express from "express";
import session from "express-session";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import AssignmentRoutes from "./assignments/routes.js";
import mongoose from "mongoose";
const CONNECTION_STRING = process.env.DB_CONNECTION_STRING || 'mongodb://127.0.0.1:27017/kanbas'

mongoose.connect(CONNECTION_STRING);
import UserRoutes from "./users/routes.js";
import cors from "cors";
import "dotenv/config";
import QuizRoutes from "./quiz.js";
const app = express();
app.use(express.json());

app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
  
app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Methods', 'POST, GET, OPTIONS');
    next();
});
const sessionOptions = {
    secret: "any string",
    resave: false,
    saveUninitialized: false,
  };
  if (process.env.NODE_ENV !== "development") {
    sessionOptions.proxy = true;
    sessionOptions.cookie = {
      sameSite: "none",
      secure: true,
    };
  }
  app.use(session(sessionOptions));
  
  

UserRoutes(app);

Lab5(app);

CourseRoutes(app);
ModuleRoutes(app);
AssignmentRoutes(app);
HelloRoutes(app);
QuizRoutes(app);

app.listen(process.env.PORT || 4000);