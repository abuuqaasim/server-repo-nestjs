import { isNotEmpty, IsNotEmpty, Length } from "class-validator";

export class CreateQuestionDto{

    @IsNotEmpty({message: 'The quiz should have a title'}) 

    @Length(3, 255)

    question: string;

    @IsNotEmpty()
  quizId: number

}