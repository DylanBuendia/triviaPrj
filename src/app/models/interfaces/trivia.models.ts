export type questionType = 'multiple' | 'boolean' ;

export enum Difficulty{
  easy ='easy',
  medium = 'medium',
  hard = 'hard'
}

// export interface IQuestion{
//   category : string;
//   type : questionType;
//   question : string;
//   answers : string[];
//   correctAnswer : string;
//   difficulty : Difficulty;
// }

// export interface IResponse{
//   response_code : number;
//   results : IResult[]
// }

export interface IResult{
  category : string;
  type: questionType;
  difficulty : Difficulty;
  question : string;
  correct_answer : string;
  incorrect_answers :string[]
}

export class Question{

  protected constructor(
    public category = '',
    public type = '',
    public question = '',
    public answers = [''],
    public correctAnswer = '',
    public difficulty = ''
  ){}

  public static Build(question: IResult): Question {
    return new this(
      question.category,
      question.type,
      question.question,
      [...question.incorrect_answers, question.correct_answer],
      question.correct_answer,
      question.difficulty

    )
  }
}
