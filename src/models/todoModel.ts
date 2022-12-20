import {model,Schema,Document} from "mongoose";

export interface TodoDocument extends Document{
    todo:string
}

export interface Itodo{
    todo:string
}

const todoSchema = new Schema<Itodo>({
    todo:{
        type:String,
        required:true
    }
})

 const TodoModel = model<Itodo>("todos",todoSchema)
 export default TodoModel
