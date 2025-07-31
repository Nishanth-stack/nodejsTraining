class TaskService{
    constructor(){
        this.tasks=[];
        this.nextId=1;
            }
    addtask(title,desc=""){
        if(!title) throw new console.error("title required");

        const task={

            id:this.nextId++,
            title:title,
            description:desc,
            completed:false,
            assigneddate: new Date()

        };

        this.tasks.push(task);
        return task;

        };

    

    gettaskbyId=(id)=>{
        
        if(id){
        const task = this.tasks.find(t => t.id === id);
      return task || null; 
        }
    
       return this.tasks.slice();

    };

    getalltask=()=>{
        return this.tasks.slice();
    };

    updatetask=(id,changes={})=>{

       const task= this.tasks.find(t=>t.id===id);

       if(!task) return null;

       Object.assign(task,changes);

       return task;

    };

    deleteTask=(id)=>{

        const lenBefore = this.tasks.length;

        this.tasks=this.tasks.filter(t=>t.id!==id);

        return this.tasks.length < lenBefore;
    };


}
module.exports = TaskService;
