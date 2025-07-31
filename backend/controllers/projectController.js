const ProjectService = require("../services/projectService.js")


const probjectserviceobject=new ProjectService();

addProject=(req,res)=>{

    try{
    const {title,description}=req.body;

    const project=probjectserviceobject.addproject(title,description);
    res.status(201).json(project);
    }
    catch(err){
        res.status(400).json({Error:err.message});
    }
    
}

getAllProject=(req,res)=>{
    const project=probjectserviceobject.getAllProjects();
    res.status(200).json(project);
}


getProjectById=(req,res)=>{

    const project_id=Number(req.params.id);

    const project=probjectserviceobject.getProjectById(project_id);

    if(project==null){
        res.status(400).json({Error:"project with is id doesnt exit"});
    }

    res.status(200).json(project);
}


updateProjectById=(req,res)=>{

    const project_id=Number(req.params.id);
    const updatedproject=probjectserviceobject.updateProjectById(project_id,req.body);
    if(updatedproject){
        res.status(200).json(updatedproject);

    }
    else{
        res.status(400).json({Error:"cant update project with this id"});
    }


}

deleteProjectById=(req,res)=>{
    const project_id=Number(req.params.id);
    const deletedproject=probjectserviceobject.deleteproject(project_id);
    if(deletedproject){
        res.status(200).json(deletedproject);
    }
    else{
        res.status(400).json({error:"cant delete this project"});
    }
};

module.exports={addProject,getAllProject,getProjectById,updateProjectById,deleteProjectById}