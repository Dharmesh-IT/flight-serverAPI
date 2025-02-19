import { Request, Response } from "express";
import { AuthService } from "../services/auth.Service";
import { logger } from '../utils/logger/logger';
import { ResultJson } from '../models/ResultJson';
import * as jwt from 'jsonwebtoken';

import { trace } from '@opentelemetry/api';
import { inject, injectable } from "inversify";
import { IAuthService } from "../services/Iauth.Service";
import { IAuthController } from "./Iauth.Controller";

@injectable()
export class AuthController implements IAuthController {

  private readonly _service: IAuthService
  constructor(@inject("IAuthService") service: IAuthService) {

    this._service = service;
  }

  async authenticate(req: Request, res: Response) {
    // const tracer = trace.getTracer('default');
    // const span = tracer.startSpan('GET /query'); // Track request duration
    const result = new ResultJson();
    try {
      // const mockData = this.getMockData();
      const { username, password } = req.body;
      const authResult = await this._service.authenticate(username, password);
      if (authResult == null) {

        result.isSuccess = false;
        result.message = 'Invalid username or password';

      } else {
        const payload = { id: authResult?.id?.toString() };
        const token = jwt.sign(payload, process.env.JWT_SECRETKEY as string, { expiresIn: process.env.JWT_EXPIRES_IN });
        result.isSuccess = true;
        result.message = 'Authentication successful';
        result.data = token;
      }
      return res.json(result);
    }
    catch (error) {
      logger.error('Error fetching users:', error);

      return res.status(500).json({
        message: "Internal Server Error"
      });
    }
    finally {
      // span.end(); // End span for tracking
    }
  }

  async profile(req: Request, res: Response,) {
    const result = new ResultJson();

    try {

    } catch (error) {

    }
  }


  getMockData() {
    return {
      userId: 1,
      name: 'John Doe',
      email: 'johndoe@example.com',
      orders: [
        { orderId: 101, item: 'Laptop', price: 1200 },
        { orderId: 102, item: 'Smartphone', price: 800 },
      ],
    };
  }
}
