import { FastifyRequest } from 'fastify';

import {
  All,
  Controller,
  RawBodyRequest,
  Request,
} from '@nestjs/common';

import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All('*')
  proxyRequest(@Request() req: RawBodyRequest<FastifyRequest>): string {
    console.log(req);

    console.log('controller');
    return 'OK';
  }
}
