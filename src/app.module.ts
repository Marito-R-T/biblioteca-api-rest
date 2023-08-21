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
      port: 3306,
      username: 'xr88nx4ejcekfqbr641y',
      password: 'pscale_pw_Lsshf4LUc1q858rwCJOdQcCec8jA5ypm17inRyEPvtO',
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
