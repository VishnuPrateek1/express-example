import express, { Request, Response } from "express";
import cors from "cors";
import morgan from "morgan"
const swaggerUi = require('swagger-ui-express'),
swaggerDocument = require('../swagger.json');



export const PORT = 8000;

// Setup app
export const app = express();
app.use(express.json());
app.use(cors());
app.use(morgan("tiny"));


app.use(
    '/api-docs',
    swaggerUi.serve, 
    swaggerUi.setup(swaggerDocument)
  );
// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Sample Route Test" });
});


app.get("/health", (req: Request, res: Response) => {
  res.status(200).json({ message: "The server is healthy!" });
});



// Run server
app.listen(PORT, () => {
  console.log(`Server started succesfully on localhost:${PORT} 🚀`);
});