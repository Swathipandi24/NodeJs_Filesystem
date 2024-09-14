import fs from "fs";
import path from "path";

// Folder to store text files
const folderPath = path.join(process.cwd(), 'files');

// Function to create a file with the current timestamp
export const createFile = () => {
  console.log("Creating file...");
  try {
    if (!fs.existsSync(folderPath)) {
      fs.mkdirSync(folderPath);
    }
    const fileName = `${new Date().toISOString().replace(/[:.]/g, '-')}.txt`;
    const filePath = path.join(folderPath, fileName);
    const content = `File created at ${new Date().toLocaleString()}`;
    fs.writeFileSync(filePath, content);
    console.log(`File created: ${fileName}`);
  } catch (e) {
    console.error(`Error creating file: ${e.message}`);
  }
};

// Function to read files from the folder
export const readFolder = () => {
  try {
    const files = fs.readdirSync(folderPath);
    return files.filter(file => file.endsWith(".txt"));
  } catch (e) {
    console.error(`Error reading folder: ${e.message}`);
    return [];
  }
};
