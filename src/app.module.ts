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
      username: 'yc4kx9kwienblrtf1uub',
      password: 'pscale_pw_ljidCrZBKghLQPadzOmeGKPaItwgj4VZhaxrWTZ2V0O',
      database: 'biblioteca',
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
      synchronize: true,
      //ssl:{"rejectUnauthorized":true}
    }), 
    UsersModule, 
    BooksModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
