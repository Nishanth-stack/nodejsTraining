class ProjectService{
    constructor(){
        this.projects=[];
        this.next_id=1;

    }

    addproject(title,description=""){

        const project={

            id:this.next_id++,
            title:title,
            description:description,
            assigneddate:new Date()

        }
        this.projects.push(project);
        return project;
    }

    getAllProjects(){
        return this.projects.slice();
    }


    getProjectById(id){

        if(id){
            const project=this.projects.find(t=>t.id==id);
            return project||null;
        }
        return this.projects.slice();
    }

    updateProjectById(id,changes={}){

        const project=this.projects.find(t=>t.id==id);
        if(!project) return null;
        object.assign(project,changes);
        return project;
    }

    deleteproject=(id)=>{

        const lenbeforedel=this.projects.length;
        this.projects=this.projects.filter(t=>t.id !==id);
        return this.projects.length<lenbeforedel;
    };


}

module.exports=ProjectService;