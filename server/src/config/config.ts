import convict from 'convict';
import dotenv from 'dotenv';
dotenv.config();

const configObject = convict({
  backendPort: {
    doc: 'port of the server',
    format: Number,
    default: 5100,
    env: 'BACKEND_PORT',
  },
  API: {
    doc: 'default api route',
    format: String,
    default: '/api',
    env: 'API',
  },
  database: {
    URL: {
      doc: 'name of the root database',
      format: String,
      default:
        'postgresql://user:password@localhost:5432/budget-app?schema=public',
      env: 'DATABASE_URL',
    },
  },
});

export const config = configObject.getProperties();
export type Config = typeof config;
