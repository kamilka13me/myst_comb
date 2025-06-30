import express from "express";
import authRoutes from "./routes/portfolio.routes.js";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";
import fs from "fs";
import swaggerUi from "swagger-ui-express";
import validateBody from "./midleware/validateBody.middleware.js";
import bodyParser from "body-parser";
import morganMiddleware from "./logger/morgan.js";
import morgan from "morgan";
import swaggerSpec from "./docs/swaggerConfig.js";
import cookieParser from "cookie-parser";

const envFile = `.env${process.env.NODE_ENV ? `.${process.env.NODE_ENV}` : ""}`;

if (fs.existsSync(envFile)) {
  dotenv.config({ path: envFile });
  console.log(`Loaded environment from ${envFile}`);
} else {
  dotenv.config(); // fallback на .env
  console.log("Loaded environment from default .env");
}

connectDB();

const app = express();

app.use(morganMiddleware);

// skip swagger on dev console
if (process.env.NODE_ENV === "development") {
  app.use(
    morgan("dev", {
      skip: (req) => req.originalUrl.startsWith("/api/docs"),
    })
  );
}

app.use(express.json());

app.use(cookieParser());

app.use("/api/docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use(bodyParser.json({ limit: "1mb" }));
app.use((err, req, res, next) => {
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({
      success: false,
      message: "Invalid JSON body format",
      code: "MALFORMED_JSON",
    });
  }
  next(err);
});
app.use(validateBody);

app.use("/api/forms", authRoutes);

export default app;
