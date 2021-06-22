//require('dotenv').config();
const serverless = require('serverless-http');
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api", require("./api/routes"));

app.get('/', function (req, res) {
  res.send('Hello World!')
})

mongoose.connect("mongodb+srv://razvan:razvan@cluster0.xuvwh.mongodb.net/myFirstDatabase?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false })
        .then(console.log('MAM CONECTAT!'))
        .catch(error => (error));

// const TaskSchema = mongoose.Schema;

// const taskSchema = new TaskSchema({
//   name: String
// })

// const taskModel = mongoose.model('TaskSchema', taskSchema);

// app.get('/get', async (req, res) => {
//   try{
//       const tasks = await taskModel.find();
//       res.json(tasks);
//   } catch (err){
//       return res.status(500).json({err: err.message});
//   }  
// });

app.listen(5000, () => {
  console.log(`Example app listening on port 5000!`)
});

module.exports.handler = serverless(app);