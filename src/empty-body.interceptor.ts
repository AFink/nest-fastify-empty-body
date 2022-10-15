import type { FastifyRequest } from 'fastify';
import { Observable } from 'rxjs';

import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';

@Injectable()
export class EmptyBodyInterceptor implements NestInterceptor {
	intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
		const req = context.switchToHttp().getRequest() as FastifyRequest;

		console.log('EmptyBodyInterceptor');

		if (req.method === 'POST' && !req.body) {
			req.headers['content-type'] = 'application/json; charset=utf8';
			req.body = {};
		}

		return next.handle();
	}
}