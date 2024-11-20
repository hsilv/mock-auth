import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DevtoolsModule } from '@nestjs/devtools-integration';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { FaqModule } from './faq/faq.module';
import { UbicationsModule } from './ubications/ubications.module';

@Module({
  imports: [
    DevtoolsModule.register({
      http: process.env.NODE_ENV !== 'production',
    }),
    TypeOrmModule.forRoot({
      type: 'oracle',
      host: process.env.DATABASE_HOST,
      port: parseInt(process.env.DATABASE_PORT || '1521'),
      username: process.env.DATABASE_USERNAME,
      password: process.env.DATABASE_PASSWORD,
      serviceName: process.env.DATABASE_SERVICE_NAME,
      synchronize: true,
      logging: true,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    }),
    UserModule,
    AuthModule,
    FaqModule,
    UbicationsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
