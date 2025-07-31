const TaskService = require('../services/taskService');

const serviceobj= new TaskService();


const createTask=(Req,Res)=>{

        try{
            const {title, des}=Req.body;

            const task=serviceobj.addtask(title,des);
            Res.status(201).json(task);
        }
        catch(err){

            Res.status(401).json({Error: err.message} );

        }

    
}

const getTaskById=(req,res)=>
{
    const taskId =Number(req.params.id);

    

    const task=serviceobj.gettaskbyId(taskId);

    if(task==null) 
        {
            return res.status(404).json({Error: 'task not found'});
}
   console.log(task);
   console.log(json(task));
    res.status(201).json(task);
};

const getalltask=(req,res)=>{
    const task=serviceobj.getalltask();
    res.status(201).json(task);
}

const updateTask=(req,res)=>
{
    const {utaskid}=Number(req.params);
    const taskupdated = serviceobj.updatetask(utaskid,req.body);
    if(taskupdated){
        res.json(taskupdated);
    }
    else{
        res.json({Error:'task not updated'});
    }
}

const deleteTask=(req,res)=>{
    const dtaskid =Number(req.params.id);
    const taskDeleted=serviceobj.deleteTask(dtaskid);

    if(taskDeleted){
        res.status(201);
    }
    else{
        res.status(404).json({error:'task not found'});
    }


};

module.exports={createTask,deleteTask,getTaskById,updateTask,getalltask};

 
