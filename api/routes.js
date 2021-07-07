const router = require("express").Router();
const Tasks = require("../model/task_model");

router.get('/get', async (req, res) => {
    try{
        const tasks = await Tasks.find();
        res.json(tasks);
    } catch (err){
        return res.status(500).json({err: err.message});
    }  
  });

router.post('/post', async (req, res) => {
    try{

        const newTask = new Tasks({
            name: req.body.name
        })

        await newTask.save();
        res.json({message: "Task adaugat cu succes!"});

    } catch (err){
        return res.status(500).json({err: err.message});
    }  
  });

router.patch('/update/:id', async (req, res) => {
    try{
        const name = req.body.name;

        await Tasks.findOneAndUpdate({_id: req.params.id},
            {
                name
            })
        
        res.json({message: "Task updatat cu succes!"});

    } catch (err){
        return res.status(500).json({err: err.message});
    }  
  });

router.delete('/delete/:name', async (req, res) => {
    try{
        
       await Tasks.findOneAndDelete({"name": req.params.name});
        res.json({message: "Task sters cu succes!"});

    } catch (err){
        return res.status(500).json({err: err.message});
    }  
  });


module.exports = router;
