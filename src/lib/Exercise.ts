import FileManager from './FileManager'
import QueryRunner from '../lib/QueryRunner'

interface Question {
    number: number
    question: string
    answer?: string
}

interface ExerciseObject {
    number: number;
    title: string;
    description?: string;
    startDate?: Date;
    dueDate?: Date;
    questions: Question[];
}

export default class Exercise {

    private exercise?: ExerciseObject
    private queryRunner: QueryRunner;
    
    constructor(private filename: string, dbname: string) {
        this.queryRunner = new QueryRunner(dbname)
    }

    public async parseFile() {
        const fileManager = new FileManager(this.filename)
        this.exercise = await fileManager.exercise as unknown as ExerciseObject
        // console.log(this.exercise)
    }

    public async runQuery(questionNumber: number) {
        const question = this.getQuestion(questionNumber)
        if(question?.answer !== undefined){
            return await this.queryRunner.query(question.answer)
        } else {
            return undefined
        }
    }

    private getQuestion(questionNumber: number): Question | undefined {
        return this.exercise?.questions.find( (question) => {
            return question.number === questionNumber
        })
    }
}


// export default class Exercise {
//     private number: number
//     private title: string
//     private description?: string
//     private startDate?: Date
//     private dueDate?: Date

//     public constructor(options: ExerciseOptions) {
//         this.number = options.number
//         this.title = options.title
//         this.description = options.description
//         this.startDate = options.startDate
//         this.dueDate = options.dueDate
//     }
// }