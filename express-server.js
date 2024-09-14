import express from 'express';
import cors from 'cors';
import { createFile, readFolder } from './fs-utils.js';

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS
app.use(cors());
app.use(express.json());

// API endpoint to create a file
app.post('/create-file', (req, res) => {
  createFile();
  res.status(201).json({ message: "File created successfully" });
});

// API endpoint to list all files
app.get('/list-files', (req, res) => {
  const files = readFolder();
  res.status(200).json(files);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
