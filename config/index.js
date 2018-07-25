import dotenv from 'dotenv';

dotenv.config(); 

// To be accessible across app
const config = {}; 

config.port = process.env.PORT || '5000';

config.db_username = process.env.DB_USERNAME;
config.db_password = process.env.DB_PASSWORD;
config.db_dialect = process.env.DB_DIALECT;

export default config;
