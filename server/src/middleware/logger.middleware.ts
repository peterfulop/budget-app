import { RequestHandler } from 'express';
import Logging from '../helpers/logging';

const loggerMiddleware: RequestHandler = async (req, res, next) => {
  Logging.info(
    `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  );
  res.on('finish', () => {
    Logging.info(
      `Incoming -> Method: [${req.method}] - Url: [${req.url}] - IP: [${req.socket.remoteAddress}] - Status: [${res.statusCode}]`
    );
  });
  next();
};

export default loggerMiddleware;
