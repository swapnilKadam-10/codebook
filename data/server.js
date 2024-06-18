import jsonServer from 'json-server';
import auth from 'json-server-auth';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import  cors  from 'cors';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = jsonServer.create();
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const middlewares = jsonServer.defaults();

// Set up CORS options
const corsOptions = {
  origin: 'http://localhost:3000', // Allow requests from this origin
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
};

// Bind the router db to the app
app.db = router.db;

// Use default middlewares (logger, static, cors, no-cache)
app.use(cors(corsOptions)); 
app.use(middlewares);
app.use(auth);
app.use(router);

const port = 8000;
app.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});
