import { RequestHandler } from 'express';
import Logging from '../helpers/logging';

const notFoundMiddleware: RequestHandler = async (_req, res, _next) => {
  const error = new Error('not found');
  Logging.error(error);
  return res.status(404).json({ message: error.message });
};

export default notFoundMiddleware;
