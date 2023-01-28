//the idea here is that any that database activities are carried out by the quiz.repository.ts 
//and the data will be fetched by the service then the controlller now interract with the service

import { EntityRepository, Repository } from "typeorm";
import { Quiz } from "./quiz.entity";

@EntityRepository(Quiz)
export class QuizRepository extends Repository<Quiz>{
    
}