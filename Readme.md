 <!-- NodeJS File System API

This project implements a simple Node.js API to create text files with the current timestamp and list all `.txt` files in a specific directory. The project uses Express.js, along with Node.js' native file system (`fs`) module.

Project Structure

nodejs-filesystem 
 fs-utils.js # Utility functions for file system operations 
 index.js # Script for manual testing 
 express-server.js # Express server with API endpoints 



API Endpoints

1. Create File
   - **Endpoint**: `/create-file`
   - **Method**: `POST`
   - **Description**: Creates a new text file in the `/files` folder with the current timestamp as the filename. The content of the file contains the current date and time.
   
2. List Files
   - **Endpoint**: `/list-files`
   - **Method**: `GET`
   - **Description**: Retrieves a list of all `.txt` files in the `/files` folder.


Run the server:
node express-server.js

Test the API using Postman or cURL:

Create File: POST http://localhost:5000/create-file
List Files: GET http://localhost:5000/list-files

You can also manually test the file creation and listing by running:
node index.js


Flow Chart
+---------------------+
|      Start          |
+---------------------+
        |
+---------------------+           +---------------------+
|  POST /create-file  |           |  GET /list-files    |
+---------------------+           +---------------------+
        |                            |
+---------------------+       +----------------------+
|  Create timestamp   |       |  Read files in folder|
+---------------------+       +----------------------+
        |                            |
+---------------------+       +----------------------+
|  Save file content  |       | Filter only .txt files|
+---------------------+       +----------------------+
        |                            |
+---------------------+       +----------------------+
| Return success msg  |       | Return list of files  |
+---------------------+       +----------------------+
        |                            |
+---------------------+       +----------------------+
|        End          |       |         End          |
+---------------------+       +----------------------+

Dependencies
Node.js
Express.js -->
