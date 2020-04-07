
import fs from 'fs'
import path from 'path'
import Exercise from './Exercise'

export default class FileManager {

    private _file: string

    constructor(filename: string){
        this._file = path.resolve(filename)
        if (!fs.existsSync(this._file)) {
            throw new Error(`file: ${this._file} does not exist`)
        }
    }

    public get exercise(): Promise<Exercise> {
        return import(this._file)
    }
}