// app.ts
import express from 'express';
import bodyParser from 'body-parser';
import { Sequelize } from 'sequelize';
const cors = require('cors');
import route from './routes/Routes';  // Import the routes
import path from 'path';

const app = express();
const port = 3000;

app.use(cors({ origin: '*' }));

// Serve static files from the "uploads" folder
app.use('/uploads', express.static(path.join(__dirname, '../uploads')));

// Middleware
app.use(bodyParser.json());

// Use the routes from Routes.ts
app.use('/api', route);

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
