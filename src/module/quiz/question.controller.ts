import { Body, Controller, Post, ValidationPipe } from "@nestjs/common";
import { UsePipes } from "@nestjs/common/decorators/core/use-pipes.decorator";
import { CreateQuestionDto } from "./dto/create-question.dto";
import { Question } from "./question.entity";
import { QuestionService } from "./question.service";
import { QuizService } from "./quiz.service";

@Controller('question')
export class QuestionController{

    constructor(private  questionService: QuestionService, private quizService: QuizService ){}
    @Post('create')
    @UsePipes(ValidationPipe)
    async saveQuestion(@Body() questionDto: CreateQuestionDto): Promise<Question>{ //the addition of return 'Promise<Question> is optional but it makes the code conform with TS concept'

        const quiz = await this.quizService.getQuizById(questionDto.quizId)
        return await this.questionService.createNewQuestion(questionDto, quiz);


    }


}