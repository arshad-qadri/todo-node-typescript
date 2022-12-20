import mongoose,{connect} from "mongoose";

// "mongodb://localhost:27017/todo-typescript" => Local
const connects=() =>{
    connect("mongodb+srv://arshad:qadri786@cluster0.gpsn1.mongodb.net/todo-typescript?retryWrites=true&w=majority").then((res)=>{
        console.log("db coneccted");
        
    }).catch((err:any)=>{
        console.log(err);
        
    })
}

export default connects