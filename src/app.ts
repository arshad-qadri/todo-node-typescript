import express, { Request, Response } from 'express';
import connects from './config/db';
import router from './routes/routes';
import bodyParser from "body-parser"
const app = express();
const port = 4000;

// connecting to database
connects()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use("/api",router)

app.listen(port, ():void => {
  return console.log(`Server started on port:${port}`);
});