import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QuestionController } from './question.controller';
import { Question } from './question.entity';
import { QuestionRepository } from './question.repository';
import { QuestionService } from './question.service';
import { QuizController } from './quiz.controller';
import { Quiz } from './quiz.entity';
import { QuizRepository } from './quiz.repository';
import { QuizService } from './quiz.service';

@Module({

    imports: [TypeOrmModule.forFeature([Quiz, Question])],
    controllers: [QuizController, QuestionController],
    providers:[QuizService, QuestionService]
})
export class QuizModule {}
