import {model,Schema,Document} from "mongoose";

export interface TodoDocument extends Document{
    todo:string
}

export interface Itodo{
    todo:string,
    isDone:boolean
}

const todoSchema = new Schema<Itodo>({
    todo:{
        type:String,
        required:true
    },
    isDone:{
        type:Boolean,
        default:false
    }
})

 const TodoModel = model<Itodo>("todos",todoSchema)
 export default TodoModel
