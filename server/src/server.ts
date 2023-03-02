import express from 'express';
import { config } from './config/config';

import loggerMiddleware from './middleware/logger.middleware';
import rulesMiddleware from './middleware/rules.middleware';

import Logging from './helpers/logging';
import notFoundMiddleware from './middleware/rules.middleware copy';
import transactionRoutes from './routes/transaction.routes';
import { TransactionRoutes } from './types';

const app = express();

const startServer = async () => {
  app.use((req, res, next) => loggerMiddleware(req, res, next));
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());
  app.use((req, res, next) => rulesMiddleware(req, res, next));

  app.use(`${config.API}/${TransactionRoutes.BASE}`, transactionRoutes);

  app.use((_req, res, _next) => notFoundMiddleware(_req, res, _next));
  app.listen(config.backendPort, () =>
    Logging.info(`Server is running on port ${config.backendPort}`)
  );
};

startServer();
