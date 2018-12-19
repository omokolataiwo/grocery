import dotenv from 'dotenv';

dotenv.config();
const envConfig = {
  development: {
    dbConnection: process.env.DEV_DB_URL
  },
  test: {
    dbConnection: process.env.TEST_DB_URL
  },
  production: {
    dbConnection: process.env.PROD_DB_URL
  }
};

const env = envConfig[process.env.NODE_ENV || 'development'];
env.env = process.env.NODE_ENV;

export default env;
