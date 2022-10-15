/**
 * This is not a production server yet!
 * This is only a minimal backend to get started.
 */
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';

import { AppModule } from './app.module';
import { EmptyBodyInterceptor } from './empty-body.interceptor';

async function bootstrap() {

	const fastifyAdapter = new FastifyAdapter();

	const app = await NestFactory.create<NestFastifyApplication>(AppModule, fastifyAdapter, {
		rawBody: true,
	});
	app.useGlobalInterceptors(new EmptyBodyInterceptor());
	const port = 3333;
	await app.listen(port);
	Logger.log(`🚀 Application is running on: http://localhost:${port}`);
}

bootstrap();