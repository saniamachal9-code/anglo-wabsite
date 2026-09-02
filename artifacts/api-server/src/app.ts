import express, { type Express } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./routes";
import { logger } from "./lib/logger";

const app: Express = express();

// CORS - allow Vercel frontend explicitly + any dev origin
const allowedOrigins = [
  "https://anglo-school.vercel.app",
  "https://anglo-wabsite.onrender.com",
  "http://localhost:3000",
  "http://localhost:5173",
  "https://*.vercel.app",
];

app.use(
  cors({
    origin(origin, callback) {
      if (!origin) return callback(null, true);
      const allowed =
        allowedOrigins.some((o) => {
          if (o.includes("*")) {
            const pattern = o.replace(/\./g, "\\.").replace(/\*/g, ".*");
            return new RegExp(`^${pattern}$`).test(origin);
          }
          return o === origin;
        });
      callback(null, allowed);
    },
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  }),
);

app.use(
  pinoHttp({
    logger,
    serializers: {
      req(req) {
        return {
          id: req.id,
          method: req.method,
          url: req.url?.split("?")[0],
        };
      },
      res(res) {
        return {
          statusCode: res.statusCode,
        };
      },
    },
  }),
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", router);

export default app;
