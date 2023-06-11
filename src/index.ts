import express, { Request, Response } from "express";

export const PORT = 8000;

// Setup app
export const app = express();
app.use(express.json());

// Routes
app.get("/", (req: Request, res: Response) => {
  res.status(200).json({ message: "Sample Route Test" });
});

// Run server
app.listen(PORT, () => {
  console.log(`Server started on localhost:${PORT} 🚀`);
});