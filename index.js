import { createFile, readFolder } from './fs-utils.js';

// Creating a file
createFile();

// Reading all files in the folder
const files = readFolder();
console.log("Files in the folder:", files);
