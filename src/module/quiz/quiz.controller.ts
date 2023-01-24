import { Body, Controller, Get, HttpCode, Post, ValidationPipe } from '@nestjs/common';
import { UsePipes } from '@nestjs/common/decorators';
import { CreateQuizDto } from './dto/CreateQuiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService){}
    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

    @Post() //it is also done as @Post("/") or with create argument
    @HttpCode(200)
    //Dto basically specifying the data being expected and provides validation for the object
    @UsePipes(ValidationPipe) //The validation through the createQuizDto will not work until this line is added
    createQuiz(@Body() quizData: CreateQuizDto){ // Is used to get the data sent from the post request of type CreateQUizDto 
        return  {data: quizData};
    }

}
