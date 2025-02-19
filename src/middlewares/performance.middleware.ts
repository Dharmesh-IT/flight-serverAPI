import { Request, Response, NextFunction } from 'express';
import responseTime from 'response-time';
import { logger } from '../utils/logger/logger';


export const performanceMiddleware = responseTime((req: Request, res: Response, time: number) => {
    logger.info({
        method: req.method,
        url: req.url,
        responseTime: `${time.toFixed(2)}ms`
    });
});