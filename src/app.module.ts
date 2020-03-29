import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import AppController from 'src/app.controller';
import AppService from 'src/app.service';
import {
  envConfig,
  EnvConfigService,
  envConfigValidationSchema,
} from 'src/env-config.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [envConfig],
      validationSchema: envConfigValidationSchema,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, EnvConfigService],
})
export default class AppModule {}
