import { Injectable } from "@nestjs/common/decorators/core/injectable.decorator";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { Question } from "./question.entity";
import { QuestionRepository } from "./question.repository";
import { Quiz } from "./quiz.entity";

/*@Injectable()
export class QuestionService{
    constructor (
        @InjectRepository(Question) private questionRepo: Repository<Question>){}

        async createNewQuestion(questionDto: CreateQuestionDto, quiz: Quiz): Promise<Question>{
            const newQuestion = await this.questionRepo.save({

            question: questionDto.question,
        });

        quiz.questions = [...quiz.questions, newQuestion];
        await quiz.save();
    
            return newQuestion;
    }
    }*/

@Injectable()
export class QuestionService {
    constructor(
        @InjectRepository(Question) private questionRepo: Repository<Question>
    ) {}

    async createNewQuestion(questionDto: CreateQuestionDto, quiz: Quiz): Promise<Question> {
        const newQuestion = await this.questionRepo.save({
            question: questionDto.question,
        });
    //it checks if the quiz is empty so it can initialize with an empty array
        if (!quiz.questions) {
            quiz.questions = [];
        }
        quiz.questions.push(newQuestion);
        await quiz.save();
    
        return newQuestion;
    }
}

