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
      host: 'aws.connect.psdb.cloud',
      //port: 3306,
      username: 'qowu6wdykmhmuvs5n3wl',
      password: 'pscale_pw_mwQo3BBXEOnfAlsOb5w9iN6tFffPzIVji2cVY6jff7E',
      database: 'biblioteca',
      ssl: {
        //ca: process.env.SSL_CERT
        rejectUnauthorized: false
      },
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
