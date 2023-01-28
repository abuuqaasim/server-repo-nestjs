import { Get, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { CreateQuizDto } from "./dto/create-quiz.dto";
import { Quiz } from "./quiz.entity";
import { QuizRepository } from "./quiz.repository";

@Injectable()
export class QuizService{
   

    //constructor(@InjectRepository(QuizRepository) private quizRepository:QuizRepository){}
    constructor(@InjectRepository(Quiz) 
    private quizRepository: Repository<Quiz>,){}
    
    
    async getAllQuiz(): Promise<Quiz[]> {
        return await this.quizRepository.find();
       }
       
    async getQuizById(id: number ): Promise<Quiz>{
        return await this.quizRepository.findOne(id);
       
        }
       


async createNewQuiz(quiz: CreateQuizDto){
    return await this.quizRepository.save(quiz);
}
}