import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'containers-us-west-84.railway.app',
      port: 7010,
      username: 'root',
      password: 'rbDdmLxb3rPw2HM4fs9o',
      database: 'railway',
      /*ssl: {
        //ca: process.env.SSL_CERT
        rejectUnauthorized: true
      },*/
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      /*extra: {
        ssl: {
          rejectUnauthorized: false
        }
      }*/
    }), 
    UsersModule, 
    BooksModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
