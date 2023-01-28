import { Body, Controller, Get, HttpCode, Post, ValidationPipe } from '@nestjs/common';
import { Param, UsePipes } from '@nestjs/common/decorators';
import { CreateQuizDto } from './dto/create-quiz.dto';
import { QuizService } from './quiz.service';

@Controller('quiz')
export class QuizController {

    constructor(private readonly quizService: QuizService){}
    @Get('/')
    getAllQuiz() {
        return this.quizService.getAllQuiz();
    }

   /* @Get(':id')
    getOneQuiz(@Param('id') id:number ){
        return this.quizService.getOneQuiz(id);
    }*/

    @Post('/create') //it is also done as @Post("/") or with create argument
    
    //Dto basically specifies which data is expected and provides validation for the object
    @UsePipes(ValidationPipe) //The validation through the createQuizDto will not work until this line is added
    async createQuiz(@Body() quizData: CreateQuizDto){ // Is used to get the data sent from the 
        //post request of type CreateQUizDto which validates whatever data sent from the request 
        return await this.quizService.createNewQuiz(quizData);
    }

}
