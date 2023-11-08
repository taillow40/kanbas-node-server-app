// const express = require("express");
import express from "express";
import HelloRoutes from "./hello.js";
import Lab5 from "./lab5.js";
import CourseRoutes from "./courses/routes.js";
import ModuleRoutes from "./modules/routes.js";
import cors from "cors";
import "dotenv/config";
import session from "express-session";

const app = express();
app.use(
    cors({
      credentials: true,
      origin: process.env.FRONTEND_URL
    })
  );
  

Lab5(app);

CourseRoutes(app);
ModuleRoutes(app);
HelloRoutes(app);


app.listen(process.env.PORT || 4000);
