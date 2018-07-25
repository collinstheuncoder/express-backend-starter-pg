import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import morgan from 'morgan';

import { routes } from './routes';

// Environment properties
import config from './config';

const server = express();
const { port } = config;

// Middlewares
server.use(bodyParser.urlencoded({ extended: false }));
server.use(bodyParser.json());
server.use(morgan('dev'));
server.use(cors());

// Routes Config
server.use('/someroute', routes.someRouter); // Replace with relevant route name(s)

// Run Server
server.listen(port, () => console.log(`Server running on port ${port}`));
