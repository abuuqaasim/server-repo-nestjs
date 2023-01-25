import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { QuizModule } from './module/quiz/quiz.module';
import { QuizController } from './module/quiz/quiz.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { typeOrmConfig } from './module/quiz/config/typeorm.conf';

@Module({
  
  /**imports: [QuizModule, TypeOrmModule.forRoot({
    type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'postgres',
      database: 'quiz',
      entities: [],
      synchronize: true,
    }),
  ],
  **/

  imports: [QuizModule,TypeOrmModule.forRoot(typeOrmConfig)],
  
  //controllers: [AppController],
  //providers: [AppService],
})
export class AppModule {}
